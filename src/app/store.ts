import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Movies } from "../features/movies/Movies";

export const store = configureStore({
  reducer: {
    movies: Movies,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
