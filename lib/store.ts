import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { sportProgramApi } from "@/services/program";
import couponReducer from "@/features/coupon/couponSlice";
export const store = configureStore({
  reducer: {
    [sportProgramApi.reducerPath]: sportProgramApi.reducer,
    coupon: couponReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sportProgramApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
