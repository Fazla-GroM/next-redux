"use client";

import { HStack, Show, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useGetPostListInfiniteQuery } from "../api/posts-api-slice";
import { PostCard } from "./post-card";
import { PostListLoadingSkeleton } from "./post-list-loading-skeleton";

export function PostListView() {
    const { ref, inView } = useInView();
    const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
        useGetPostListInfiniteQuery();

    useEffect(() => {
        if (inView) {
            void fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    if (isLoading) {
        return <PostListLoadingSkeleton />;
    }

    const flattenedPosts = data?.pages.flatMap((item) => item.posts);

    return (
        <Stack as="ul" gap="4">
            {flattenedPosts?.map((post) => (
                <li key={post.id}>
                    <PostCard
                        title={post.title}
                        body={post.body}
                        id={post.id}
                        userId={post.userId}
                        votes={post.reactions.likes - post.reactions.dislikes}
                    />
                </li>
            ))}
            <Show
                when={hasNextPage}
                fallback={
                    <HStack as="li" justifyContent="center" height="11">
                        <Text textStyle="sm">No more posts.</Text>
                    </HStack>
                }
            >
                <HStack as="li" ref={ref} justifyContent="center" height="11">
                    <Show when={isFetchingNextPage}>
                        <Spinner size="lg" />
                    </Show>
                </HStack>
            </Show>
        </Stack>
    );
}
