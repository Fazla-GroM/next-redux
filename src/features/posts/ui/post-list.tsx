"use client";

import { Stack } from "@chakra-ui/react";

import { useGetPostListQuery } from "../redux/posts-api-slice";
import { PostCard } from "./post-card";
import { PostCardSkeleton } from "./post-card-skeleton";

export function PostList() {
    const { data, error, isLoading } = useGetPostListQuery({
        search: {
            limit: 20,
        },
    });

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

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }

    return (
        <Stack as="ul" gap="4">
            {data?.posts.map((post) => (
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
        </Stack>
    );
}
