import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

type UserPersonaProperties = Readonly<{
    name: string;
    email: string;
    image: string;
}>;

export function UserPersona({ name, email, image }: UserPersonaProperties) {
    return (
        <HStack gap="4">
            <Avatar.Root size="md">
                <Avatar.Image src={image} alt={name} />
                <Avatar.Fallback name={name} />
            </Avatar.Root>
            <Stack gap="0">
                <Text textStyle="md" fontWeight="medium" color="fg">
                    {name || "John Doe"}
                </Text>
                <Text textStyle="sm" color="fg.muted">
                    {email || "john.doe@email.com"}
                </Text>
            </Stack>
        </HStack>
    );
}
