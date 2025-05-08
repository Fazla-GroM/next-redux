"use client";

import { ReduxStoreProvider } from "../redux/redux-store-provider";
import { ThemeProvider } from "../ui/theme/theme-provider";

type ProvidersProperties = Readonly<{
    children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProperties) {
    return (
        <ReduxStoreProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </ReduxStoreProvider>
    );
}
