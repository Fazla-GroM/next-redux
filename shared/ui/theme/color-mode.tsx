"use client";

import type { IconButtonProps, SpanProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider, useTheme } from "next-themes";
import { forwardRef } from "react";

export type ColorModeProviderProperties = {} & ThemeProviderProps;

export function ColorModeProvider(properties: ColorModeProviderProperties) {
    return <ThemeProvider attribute="class" disableTransitionOnChange {...properties} />;
}

export type ColorMode = "light" | "dark";

export type UseColorModeReturn = {
    colorMode: ColorMode;
    setColorMode: (colorMode: ColorMode) => void;
    toggleColorMode: () => void;
};

export function useColorMode(): UseColorModeReturn {
    const { resolvedTheme, setTheme } = useTheme();
    const toggleColorMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    return {
        colorMode: resolvedTheme as ColorMode,
        setColorMode: setTheme,
        toggleColorMode,
    };
}

export function useColorModeValue<T>(light: T, dark: T) {
    const { colorMode } = useColorMode();
    return colorMode === "dark" ? dark : light;
}

export function ColorModeIcon() {
    const { colorMode } = useColorMode();
    return colorMode === "dark" ? <MoonIcon /> : <SunIcon />;
}

type ColorModeButtonProperties = {} & Omit<IconButtonProps, "aria-label">;

export const ColorModeButton = forwardRef<HTMLButtonElement, ColorModeButtonProperties>(
    function ColorModeButton(properties, reference) {
        const { toggleColorMode } = useColorMode();
        return (
            <ClientOnly fallback={<Skeleton boxSize="10" rounded="full" />}>
                <IconButton
                    onClick={toggleColorMode}
                    variant="ghost"
                    aria-label="Toggle color mode"
                    size="md"
                    rounded="full"
                    ref={reference}
                    {...properties}
                    css={{
                        _icon: {
                            width: "5",
                            height: "5",
                        },
                    }}
                >
                    <ColorModeIcon />
                </IconButton>
            </ClientOnly>
        );
    }
);

export const LightMode = forwardRef<HTMLSpanElement, SpanProps>(
    function LightMode(properties, reference) {
        return (
            <Span
                color="fg"
                display="contents"
                className="chakra-theme light"
                colorPalette="gray"
                colorScheme="light"
                ref={reference}
                {...properties}
            />
        );
    }
);

export const DarkMode = forwardRef<HTMLSpanElement, SpanProps>(
    function DarkMode(properties, reference) {
        return (
            <Span
                color="fg"
                display="contents"
                className="chakra-theme dark"
                colorPalette="gray"
                colorScheme="dark"
                ref={reference}
                {...properties}
            />
        );
    }
);
