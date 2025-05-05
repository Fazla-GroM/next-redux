import { Box } from "@chakra-ui/react";
import type { Metadata } from "next";

import { GithubLinkButton } from "../ui/components/github-link-button";
import { Header } from "../ui/components/header";
import { Logo } from "../ui/components/logo";
import { ThemeSwitchButton } from "../ui/components/theme-switch-button";
import { Providers } from "./providers";

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
                <Providers>
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
                        <Header
                            slotLeft={<Logo />}
                            slotRight={
                                <>
                                    <GithubLinkButton />
                                    <ThemeSwitchButton />
                                </>
                            }
                        />
                        {children}
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
