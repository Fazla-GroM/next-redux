import { Box } from "@chakra-ui/react";

import { PostList } from "../features/posts/ui/post-list";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6">
            <PostList />
        </Box>
    );
}
