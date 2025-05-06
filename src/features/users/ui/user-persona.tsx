import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

import { UserPersonaSkeleton } from "./user-persona-skeleton";

type UserPersonaProperties = Readonly<{
    name: string;
    email: string;
    image: string;
    isLoading?: boolean;
}>;

export function UserPersona({ name, email, image, isLoading }: UserPersonaProperties) {
    if (isLoading) {
        return <UserPersonaSkeleton />;
    }

    return (
        <HStack gap="4">
            <Avatar.Root size="md">
                <Avatar.Image src={image} alt={name} />
                <Avatar.Fallback name={name} />
            </Avatar.Root>
            <Stack gap="0">
                <Text textStyle="sm" fontWeight="medium" color="fg">
                    {name}
                </Text>
                <Text textStyle="sm" color="fg.muted">
                    {email}
                </Text>
            </Stack>
        </HStack>
    );
}

// export function UserPersona({ name, email, image }: UserPersonaProperties) {
//     return (
//         <HStack gap="4">
//             <Avatar.Root size="md">
//                 <Avatar.Image src={image} alt={name} />
//                 <Avatar.Fallback name={name} />
//             </Avatar.Root>
//             <Stack gap="0">
//                 <Text textStyle="md" fontWeight="medium" color="fg">
//                     {name || "John Doe"}
//                 </Text>
//                 <Text textStyle="sm" color="fg.muted">
//                     {email || "john.doe@email.com"}
//                 </Text>
//             </Stack>
//             <Skeleton width="40px">
//                 <Text>blbla</Text>
//             </Skeleton>
//         </HStack>
//     );
// }
