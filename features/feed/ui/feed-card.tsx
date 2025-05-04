import { Avatar, Button, Card, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type FeedCardProperties = Readonly<{
    isHighlighted?: boolean | undefined;
}>;

export function FeedCard({ isHighlighted }: FeedCardProperties) {
    return (
        <Card.Root colorPalette={"purple"} variant={isHighlighted ? "subtle" : "outline"}>
            <Card.Body gap="3">
                <HStack gap="3">
                    <Avatar.Root size="lg">
                        <Avatar.Image src="https://picsum.photos/200/300" />
                        <Avatar.Fallback name="Nue Camp" />
                    </Avatar.Root>
                    <Stack gap="0">
                        <Card.Title>John Doe</Card.Title>
                        <Text textStyle="sm" color="fg.muted">
                            john.doe@email.com
                        </Text>
                    </Stack>
                </HStack>

                <Card.Description paddingLeft="14">
                    This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec odio vel dui euismod fermentum. Curabitur nec odio vel dui euismod
                    fermentum.
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button
                    asChild
                    rounded="full"
                    size="md"
                    variant={isHighlighted ? "solid" : "outline"}
                >
                    <Link href="/posts/123">View post</Link>
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}
