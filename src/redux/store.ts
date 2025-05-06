import { configureStore } from "@reduxjs/toolkit";

import { postsApiMiddleware } from "../features/posts/redux/posts-api-slice";
import { usersApiMiddleware } from "../features/users/redux/users-api-slice";
import { rootReducer } from "./root-reducer";

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().prepend(postsApiMiddleware, usersApiMiddleware);
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
