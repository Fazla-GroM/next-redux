'use client";';

import { Card, HStack, IconButton, LinkOverlay, Text } from "@chakra-ui/react";
import { MessageSquareIcon, ShareIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

import { UserPersona } from "../../users/ui/user-persona";

type PostCardProperties = Readonly<{
    isHighlighted?: boolean | undefined;
    userId: number;
    title: string;
    body: string;
    id: number;
    votes: number;
}>;

export function PostCard({ isHighlighted, userId, id, title, body, votes }: PostCardProperties) {
    return (
        <Card.Root
            size={["sm", "md"]}
            as="article"
            colorPalette={"purple"}
            variant={isHighlighted ? "subtle" : "outline"}
        >
            <Card.Header as="header">
                <UserPersona userId={userId} />
            </Card.Header>
            <Card.Body gap="3">
                <Card.Title>
                    <LinkOverlay asChild>
                        <Link scroll={false} href={`/posts/${id.toString()}`}>
                            {title}
                        </Link>
                    </LinkOverlay>
                </Card.Title>
                <Card.Description>{body}</Card.Description>
            </Card.Body>
            <Card.Footer as="footer" justifyContent="space-between">
                <HStack>
                    <HStack zIndex="base" backgroundColor="bg.muted" borderRadius="full">
                        <IconButton size="md" rounded="full" variant="subtle" colorPalette="gray">
                            <ThumbsUpIcon />
                        </IconButton>
                        <Text textStyle="sm" fontWeight="semibold">
                            {votes}
                        </Text>
                        <IconButton size="md" rounded="full" variant="subtle" colorPalette="gray">
                            <ThumbsDownIcon />
                        </IconButton>
                    </HStack>
                    <IconButton size="md" rounded="full" variant="subtle" colorPalette="gray">
                        <MessageSquareIcon />
                    </IconButton>
                </HStack>
                <IconButton size="md" rounded="full" variant="subtle" colorPalette="gray">
                    <ShareIcon />
                </IconButton>
            </Card.Footer>
        </Card.Root>
    );
}
