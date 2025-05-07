"use client";

import { Box, Button, EmptyState, HStack, VStack } from "@chakra-ui/react";
import { BugIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Box as="main" paddingX="4" paddingY="6">
            <EmptyState.Root size="lg" colorPalette="purple">
                <EmptyState.Content>
                    <EmptyState.Indicator>
                        <BugIcon />
                    </EmptyState.Indicator>
                    <VStack textAlign="center">
                        <EmptyState.Title>Something went wrong!</EmptyState.Title>
                        <EmptyState.Description>
                            Ooops, it seems you found them nasty bugs.
                        </EmptyState.Description>
                    </VStack>
                    <HStack gap="4">
                        <Button
                            variant="solid"
                            rounded="full"
                            onClick={() => {
                                reset();
                            }}
                        >
                            Try again
                        </Button>
                        <Button asChild variant="solid" rounded="full">
                            <Link href="/">Back to Feed</Link>
                        </Button>
                    </HStack>
                </EmptyState.Content>
            </EmptyState.Root>
        </Box>
    );
}
