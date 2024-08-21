import { combineReducers } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';

const createReducer = () => {
  return combineReducers({
    contact: contactSlice,
  });
};

export default createReducer;
