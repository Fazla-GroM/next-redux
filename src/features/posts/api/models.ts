import * as v from "valibot";

export const postResponseSchema = v.object({
    id: v.number(),
    title: v.string(),
    body: v.string(),
    tags: v.array(v.string()),
    reactions: v.object({
        likes: v.number(),
        dislikes: v.number(),
    }),
    views: v.number(),
    userId: v.number(),
});

export const getPostDetailsArgumentsSchema = v.object({
    id: v.number(),
});

export const postListResponseSchema = v.object({
    posts: v.array(postResponseSchema),
    total: v.number(),
    skip: v.number(),
    limit: v.number(),
});

export const getPostInfiniteListArgumentsSchema = v.object({
    queryArg: v.void(),
    pageParam: v.object({
        limit: v.number(),
        skip: v.number(),
    }),
});
