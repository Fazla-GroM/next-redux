import { HStack, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

import { UserPersonaSkeleton } from "../../users/ui/user-persona-skeleton";

export function PostViewLoadingSkeleton() {
    return (
        <Stack gap="6">
            <HStack gap="4">
                <SkeletonCircle size="10" />

                <UserPersonaSkeleton />
            </HStack>
            <Stack paddingInline={["0", "14"]}>
                <SkeletonText noOfLines={6} />
            </Stack>
        </Stack>
    );
}
