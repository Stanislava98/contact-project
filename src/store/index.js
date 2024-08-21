import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

export const store = configureStore({
  reducer: createReducer(),
});
