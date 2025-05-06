import { Skeleton, Stack } from "@chakra-ui/react";

import { UserPersonaSkeleton } from "../../users/ui/user-persona-skeleton";

export function PostCardSkeleton() {
    return (
        <Stack
            gap={["4", "6"]}
            paddingBlock={["4", "6"]}
            paddingInline={["4", "6"]}
            borderColor="border"
            borderWidth="1px"
            borderRadius="l3"
        >
            <UserPersonaSkeleton />
            <Skeleton height={["156px", "36"]} />
        </Stack>
    );
}
