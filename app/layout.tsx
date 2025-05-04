import { Box, HStack, IconButton } from "@chakra-ui/react";
import type { Metadata } from "next";

import { Logo } from "~shared/ui/components/logo";
import { GithubIcon } from "~shared/ui/icons/github-icon";
import { ColorModeButton } from "~shared/ui/theme/color-mode";
import { Provider } from "~shared/ui/theme/provider";

export const metadata: Metadata = {
    title: "Postly",
    description: "A simple blogging platform for the masses.",
};

type RootLayoutProperties = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProperties) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Provider>
                    <Box
                        position="relative"
                        width="full"
                        maxWidth="2xl"
                        minHeight="dvh"
                        marginInline="auto"
                        isolation="isolate"
                        borderColor="border"
                        borderLeftWidth={["0", "1px"]}
                        borderRightWidth={["0", "1px"]}
                    >
                        <Box
                            as="header"
                            flexShrink="0"
                            height="16"
                            paddingX="4"
                            borderBottomWidth="1px"
                            borderColor="border"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            position="sticky"
                            top="0"
                            left="0"
                            zIndex="sticky"
                            backgroundColor="bg/60"
                            backdropFilter="blur(8px)"
                        >
                            <Logo />
                            <HStack>
                                <IconButton
                                    asChild
                                    variant="ghost"
                                    aria-label="Github link"
                                    size="md"
                                    rounded="full"
                                >
                                    <a
                                        href="https://www.github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <GithubIcon fill="current" />
                                    </a>
                                </IconButton>
                                <ColorModeButton />
                            </HStack>
                        </Box>
                        {children}
                    </Box>
                </Provider>
            </body>
        </html>
    );
}
