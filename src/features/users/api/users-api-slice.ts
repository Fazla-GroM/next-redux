import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getUserDetailsArgumentsSchema, userSchema } from "./models";

// Define a service using a base URL and expected endpoints
export const usersApiSlice = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users/" }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: ({ id }) => id.toString(),
            responseSchema: userSchema,
            argSchema: getUserDetailsArgumentsSchema,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDetailsQuery, middleware: usersApiMiddleware } = usersApiSlice;
