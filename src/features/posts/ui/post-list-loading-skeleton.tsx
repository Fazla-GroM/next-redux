import { Stack } from "@chakra-ui/react";

import { PostCardSkeleton } from "./post-card-skeleton";

type PostListLoadingSkeletonProperties = Readonly<{
    ammount?: number | undefined;
}>;

export function PostListLoadingSkeleton({ ammount = 20 }: PostListLoadingSkeletonProperties) {
    const ammountArray = [...Array.from({ length: ammount }).keys()];

    return (
        <Stack as="ul" gap="4">
            {ammountArray.map((item) => (
                <li key={item}>
                    <PostCardSkeleton />
                </li>
            ))}
        </Stack>
    );
}
