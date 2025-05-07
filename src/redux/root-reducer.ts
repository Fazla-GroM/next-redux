import { combineSlices } from "@reduxjs/toolkit";

import { postsApiSlice } from "../features/posts/api/posts-api-slice";
import { usersApiSlice } from "../features/users/api/users-api-slice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
export const rootReducer = combineSlices(postsApiSlice, usersApiSlice);
