import { Box, Stack } from "@chakra-ui/react";

import { PostCard } from "../features/posts/ui/post-card";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6">
            <Stack as="ul" gap="4">
                <li>
                    <PostCard isHighlighted />
                </li>
                <li>
                    <PostCard />
                </li>
                <li>
                    <PostCard />
                </li>
                <li>
                    <PostCard />
                </li>
                <li>
                    <PostCard />
                </li>
                <li>
                    <PostCard />
                </li>
            </Stack>
        </Box>
    );
}
