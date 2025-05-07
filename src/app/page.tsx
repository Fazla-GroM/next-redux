import { Box } from "@chakra-ui/react";

import { PostListView } from "../features/posts/ui/post-list-view";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6">
            <PostListView />
        </Box>
    );
}
