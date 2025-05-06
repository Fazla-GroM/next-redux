"use client";

import { Stack } from "@chakra-ui/react";

import { useGetPostListQuery } from "../redux/posts-api-slice";
import { PostCard } from "./post-card";

export function PostList() {
    const { data, error, isLoading } = useGetPostListQuery({
        search: {
            limit: 20,
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
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
                    />
                </li>
            ))}
        </Stack>
    );
}
