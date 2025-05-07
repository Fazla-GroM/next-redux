import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";
import { skipToken } from "@reduxjs/toolkit/query";

import { useGetUserDetailsQuery } from "../api/users-api-slice";
import { UserPersonaSkeleton } from "./user-persona-skeleton";

type UserPersonaProperties = Readonly<{
    userId?: number | undefined;
}>;

export function UserPersona({ userId }: UserPersonaProperties) {
    const { data, isLoading } = useGetUserDetailsQuery(userId ? { id: userId } : skipToken);

    if (isLoading) {
        return <UserPersonaSkeleton />;
    }

    const fullUsername = [data?.firstName, data?.lastName].filter(Boolean).join(" ");

    return (
        <HStack gap="4">
            <Avatar.Root size="md">
                <Avatar.Image src={data?.image} alt={fullUsername} />
                <Avatar.Fallback name={fullUsername} />
            </Avatar.Root>
            <Stack gap="0">
                <Text textStyle="sm" fontWeight="medium" color="fg">
                    {fullUsername}
                </Text>
                <Text textStyle="sm" color="fg.muted">
                    {data?.email}
                </Text>
            </Stack>
        </HStack>
    );
}
