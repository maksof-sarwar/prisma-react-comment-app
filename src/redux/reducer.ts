import { combineReducers } from '@reduxjs/toolkit';
import auth from './authSlice';

const rootReducer = combineReducers({ auth });
export default rootReducer;
