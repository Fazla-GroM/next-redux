import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
    ThemeProvider as NextThemesProvider,
    type ThemeProviderProps as NextThemesProviderProperties,
} from "next-themes";

type ThemeProvider = NextThemesProviderProperties;

type ThemeLightColorScheme = "light";

type ThemeDarkColorScheme = "dark";

export type ThemeColorScheme = ThemeLightColorScheme | ThemeDarkColorScheme;

const THEMES: [ThemeLightColorScheme, ThemeDarkColorScheme] = ["light", "dark"];

export function ThemeProvider({ children, ...rest }: ThemeProvider) {
    return (
        <ChakraProvider value={defaultSystem}>
            <NextThemesProvider
                enableSystem
                disableTransitionOnChange
                defaultTheme="system"
                attribute="class"
                themes={THEMES}
                {...rest}
            >
                {children}
            </NextThemesProvider>
        </ChakraProvider>
    );
}
