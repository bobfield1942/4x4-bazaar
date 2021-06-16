import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carsSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    user : userReducer
  },
});
