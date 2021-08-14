import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import snippetsReducer from '../slices/snippets/snippetsSlice';

export const store = configureStore({
  reducer: {
    snippets: snippetsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
