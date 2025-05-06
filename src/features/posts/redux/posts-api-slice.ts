// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as v from "valibot";

import { truncateStringAtWhitespace } from "../../../utils/truncate-string";

const postResponseSchema = v.object({
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

const getPostDetailsArgumentsSchema = v.object({
    path: v.object({
        id: v.number(),
    }),
});

const postListResponseSchema = v.object({
    posts: v.array(postResponseSchema),
    total: v.number(),
    skip: v.number(),
    limit: v.number(),
});

const getPostListArgumentsSchema = v.object({
    search: v.object({
        limit: v.optional(v.number(), 20),
        skip: v.optional(v.number()),
    }),
});

// type Input = v.InferInput<typeof getPostListArgumentsSchema>;

// type Output = v.InferOutput<typeof getPostListArgumentsSchema>;

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/posts" }),
    endpoints: (builder) => ({
        getPostList: builder.query({
            // It looks like type inference is not working here. Probably because wrong implementation
            // from library authors. If we uncomment type Output above limit will will not be of type number | undefined.
            // Other libs which use standard schema work correctly.(e.g Tanstack Router)
            // @ts-expect-error -- Type inference is not working correctly
            query: ({ search }) => `?limit=${search.limit.toString()}`,

            rawResponseSchema: postListResponseSchema,
            responseSchema: postListResponseSchema,
            argSchema: getPostListArgumentsSchema,
            transformResponse: (response) => ({
                ...response,
                posts: response.posts.map((post) => ({
                    ...post,
                    body: truncateStringAtWhitespace(post.body, { limit: 100, suffix: "..." }),
                })),
            }),
        }),
        getPostDetails: builder.query({
            query: ({ path }) => path.id.toString(),
            responseSchema: postResponseSchema,
            argSchema: getPostDetailsArgumentsSchema,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPostListQuery,
    useGetPostDetailsQuery,
    middleware: postsApiMiddleware,
} = postsApiSlice;
