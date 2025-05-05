import { useRef } from "react";
import { Provider } from "react-redux";

import type { AppStore } from "./store";
import { makeStore } from "./store";

export default function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
    const storeReference = useRef<AppStore>(undefined);

    storeReference.current ??= makeStore();

    return <Provider store={storeReference.current}>{children}</Provider>;
}
