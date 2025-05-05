"use client";

import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "../hooks/use-theme";

export function ThemeSwitchButton() {
    const { theme, toggleTheme } = useTheme();

    const ColorModeIcon = theme === "dark" ? MoonIcon : SunIcon;

    return (
        <ClientOnly fallback={<Skeleton boxSize="10" rounded="full" />}>
            <IconButton
                onClick={toggleTheme}
                variant="ghost"
                aria-label="Toggle color mode"
                size="md"
                rounded="full"
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
