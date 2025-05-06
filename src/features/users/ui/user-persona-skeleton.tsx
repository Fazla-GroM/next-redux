import { HStack, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

export function UserPersonaSkeleton() {
    return (
        <HStack gap="4">
            <SkeletonCircle size="10" />
            <Stack gap="0">
                <SkeletonText width="200px" loading={true} noOfLines={2} />
            </Stack>
        </HStack>
    );
}
