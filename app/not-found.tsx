import { Box, Button, EmptyState, VStack } from "@chakra-ui/react";
import { RabbitIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6">
            <EmptyState.Root size="lg" colorPalette="purple">
                <EmptyState.Content>
                    <EmptyState.Indicator>
                        <RabbitIcon />
                    </EmptyState.Indicator>
                    <VStack textAlign="center">
                        <EmptyState.Title>Page Not Found</EmptyState.Title>
                        <EmptyState.Description>
                            Ooops, it seems you found a rabbit hole.
                        </EmptyState.Description>
                    </VStack>
                    <Button asChild variant="solid" rounded="full">
                        <Link href="/">Back to Feed</Link>
                    </Button>
                </EmptyState.Content>
            </EmptyState.Root>
        </Box>
    );
}
