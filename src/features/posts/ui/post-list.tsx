"use client";

import { HStack, Show, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useGetPostListInfiniteQuery } from "../redux/posts-api-slice";
import { PostCard } from "./post-card";
import { PostCardSkeleton } from "./post-card-skeleton";

export function PostList() {
    const { ref, inView } = useInView();
    console.log("PostList inView", inView);

    const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } =
        useGetPostListInfiniteQuery();

    const flattenedPosts = data?.pages.flatMap((item) => item.posts);

    useEffect(() => {
        if (inView) {
            void fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    if (isLoading) {
        return (
            <Stack as="ul" gap="4">
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
                <li>
                    <PostCardSkeleton />
                </li>
            </Stack>
        );
    }

    if (isError) {
        return <div>Error</div>;
    }

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
                    <HStack justifyContent="center" height="11">
                        <Text textStyle="sm">No more posts.</Text>
                    </HStack>
                }
            >
                <HStack ref={ref} justifyContent="center" height="11">
                    <Show when={isFetchingNextPage}>
                        <Spinner size="lg" />
                    </Show>
                </HStack>
            </Show>
        </Stack>
    );
}
