import { Box } from "@chakra-ui/react";

import { PostView } from "../../../features/posts/ui/post-view";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6">
            <PostView />
        </Box>
    );
}
