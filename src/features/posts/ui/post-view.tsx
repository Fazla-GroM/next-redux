"use client";
import { Heading, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import { UserPersona } from "../../users/ui/user-persona";
import { useGetPostDetailsQuery } from "../api/posts-api-slice";
import { PostViewLoadingSkeleton } from "./post-view-loading-skeleton";

type PostViewPageParameterProperties = Readonly<{
    id: string;
}>;

export function PostView() {
    const parameters = useParams<PostViewPageParameterProperties>();

    const { data, isLoading, isError } = useGetPostDetailsQuery({
        id: Number(parameters.id),
    });

    if (isLoading) {
        return <PostViewLoadingSkeleton />;
    }

    if (isError) {
        notFound();
    }

    return (
        <Stack as="article" gap="6">
            <HStack as="header" gap="4">
                <IconButton
                    asChild
                    variant="subtle"
                    rounded="full"
                    aria-label="Back to feed"
                    width="fit"
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </IconButton>
                <UserPersona userId={data?.userId} />
            </HStack>
            <Stack paddingInline={["0", "14"]}>
                <Heading>{data?.title}</Heading>
                <Text color="fg.muted">{data?.body}</Text>
            </Stack>
        </Stack>
    );
}
