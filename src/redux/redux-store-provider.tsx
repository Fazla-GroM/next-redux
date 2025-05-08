import { setupListeners } from "@reduxjs/toolkit/query";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

import type { AppStore } from "./store";
import { makeStore } from "./store";

export function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
    const storeReference = useRef<AppStore>(undefined);

    storeReference.current ??= makeStore();

    useEffect(() => {
        if (storeReference.current) {
            // configure listeners using the provided defaults
            // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors for RTKQuery
            const unsubscribe = setupListeners(storeReference.current.dispatch);

            return unsubscribe;
        }

        return;
    }, []);

    return <Provider store={storeReference.current}>{children}</Provider>;
}
