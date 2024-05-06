import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { sportProgramApi } from "@/services/program";
import couponReducer from "@/features/coupon/couponSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  // it can takes 2 more fields they are whiteList and blackList arrays. Their purpose is make which slice might be persisted or not.
};

const persistedReducer = persistReducer(persistConfig, couponReducer);

export const store = configureStore({
  reducer: {
    [sportProgramApi.reducerPath]: sportProgramApi.reducer,
    coupon: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // An array of action types to ignore when checking for serializability.  Defaults to []
      },
    }).concat(sportProgramApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
