// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { truncateStringAtWhitespace } from "../../../utils/truncate-string";
import {
    getPostDetailsArgumentsSchema,
    getPostInfiniteListArgumentsSchema,
    postListResponseSchema,
    postResponseSchema,
} from "./models";

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/posts" }),
    endpoints: (builder) => ({
        getPostDetails: builder.query({
            query: ({ id }) => id.toString(),
            responseSchema: postResponseSchema,
            argSchema: getPostDetailsArgumentsSchema,
            catchSchemaFailure: (error) => ({
                status: "CUSTOM_ERROR",
                error: error.schemaName + " failed validation",
                data: error.issues,
            }),
        }),
        getPostList: builder.infiniteQuery({
            query: ({ pageParam }) => {
                return `?limit=${pageParam.limit.toString()}&skip=${pageParam.skip.toString()}`;
            },
            rawResponseSchema: postListResponseSchema,
            responseSchema: postListResponseSchema,
            argSchema: getPostInfiniteListArgumentsSchema,

            infiniteQueryOptions: {
                initialPageParam: {
                    skip: 0,
                    limit: 20,
                },

                getNextPageParam: (lastPage, _allPages, lastPageParameter) => {
                    const nextOffset = lastPageParameter.skip + lastPageParameter.limit;
                    const remainingItems = lastPage.total - nextOffset;

                    if (remainingItems <= 0) {
                        return;
                    }

                    return {
                        ...lastPageParameter,
                        skip: nextOffset,
                    };
                },
                getPreviousPageParam: (_firstPage, _allPages, firstPageParameter) => {
                    const previousOffset = firstPageParameter.skip - firstPageParameter.limit;
                    if (previousOffset < 0) return;

                    return {
                        ...firstPageParameter,
                        skip: previousOffset,
                    };
                },
            },
            transformResponse: (response) => ({
                ...response,
                posts: response.posts.map((post) => ({
                    ...post,
                    body: truncateStringAtWhitespace(post.body, { limit: 100, suffix: "..." }),
                })),
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPostDetailsQuery,
    useGetPostListInfiniteQuery,
    middleware: postsApiMiddleware,
} = postsApiSlice;
