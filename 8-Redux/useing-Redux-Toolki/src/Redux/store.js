import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/CounterSlice.jsx';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})