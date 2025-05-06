'use client";';

import { Button, Card } from "@chakra-ui/react";
import Link from "next/link";

import { useGetUserDetailsQuery } from "../../users/redux/users-api-slice";
import { UserPersona } from "../../users/ui/user-persona";

type PostCardProperties = Readonly<{
    isHighlighted?: boolean | undefined;
    userId: number;
    title: string;
    body: string;
    id: number;
}>;

export function PostCard({ isHighlighted, userId, id, title, body }: PostCardProperties) {
    const { data } = useGetUserDetailsQuery({
        path: {
            id: userId,
        },
    });

    return (
        <Card.Root colorPalette={"purple"} variant={isHighlighted ? "subtle" : "outline"}>
            <Card.Header>
                <UserPersona
                    name={`${data?.firstName} ${data?.lastName}`}
                    email={data?.email}
                    image={data?.image}
                />
            </Card.Header>
            <Card.Body gap="3">
                <Card.Title>{title}</Card.Title>

                <Card.Description>{body}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button
                    asChild
                    rounded="full"
                    size="md"
                    variant={isHighlighted ? "solid" : "outline"}
                >
                    <Link href={`/posts/${id.toString()}`}>View post</Link>
                </Button>
            </Card.Footer>
        </Card.Root>
    );
}
