"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import { ColorModeProvider, type ColorModeProviderProperties } from "./color-mode";

export function Provider(properties: ColorModeProviderProperties) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ColorModeProvider {...properties} />
        </ChakraProvider>
    );
}
