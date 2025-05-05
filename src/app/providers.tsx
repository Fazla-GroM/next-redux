"use client";

import { ThemeProvider } from "../ui/theme/theme-provider";

type ProvidersProperties = Readonly<{
    children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProperties) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
