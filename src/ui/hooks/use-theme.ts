import { useTheme as useNextThemes } from "next-themes";

import type { ThemeColorScheme } from "../theme/theme-provider";

type UseThemeReturnType = Readonly<{
    theme: ThemeColorScheme;
    setTheme: (theme: ThemeColorScheme) => void;
    toggleTheme: () => void;
}>;

export function useTheme(): UseThemeReturnType {
    const { resolvedTheme, setTheme } = useNextThemes();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return {
        theme: resolvedTheme as ThemeColorScheme,
        setTheme,
        toggleTheme,
    };
}
