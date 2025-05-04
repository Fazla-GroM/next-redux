import { Avatar, Box, IconButton, Stack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <Box as="main" paddingX="4" paddingY="6" display="flex " flexDirection="column" gap="8">
            <IconButton
                asChild
                variant="subtle"
                rounded="full"
                aria-label="Back to feed"
                width="fit"
            >
                <Link href="/" scroll={false}>
                    <ChevronLeftIcon />
                </Link>
            </IconButton>
            <Stack align="center">
                <Avatar.Root size="2xl">
                    <Avatar.Image src="https://picsum.photos/200/300" />
                    <Avatar.Fallback name="Nue Camp" />
                </Avatar.Root>
                <Stack align="center" gap="0">
                    <Text textStyle="xl" fontWeight="semibold">
                        John Doe
                    </Text>
                    <Text textStyle="sm" color="fg.muted">
                        john.doe@email.com
                    </Text>
                </Stack>
            </Stack>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam consequuntur esse
                dolore ex voluptatum, rerum magnam consectetur perspiciatis veritatis! Quod eum
                neque natus temporibus inventore, doloremque similique? Itaque, incidunt! Iusto?
            </Text>
        </Box>
    );
}
