import { configureStore } from "@reduxjs/toolkit";
import sportProgramReducer from "@/features/sportProgram/sportProgramSlice";

export const store = configureStore({
  reducer: {
    sportProgram: sportProgramReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
