import { Box, Stack } from "@chakra-ui/react";

import { FeedCard } from "~features/feed/ui/feed-card";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6">
            <Stack as="ul" gap="4">
                <li>
                    <FeedCard isHighlighted />
                </li>
                <li>
                    <FeedCard />
                </li>
                <li>
                    <FeedCard />
                </li>
                <li>
                    <FeedCard />
                </li>
                <li>
                    <FeedCard />
                </li>
                <li>
                    <FeedCard />
                </li>
            </Stack>
        </Box>
    );
}
