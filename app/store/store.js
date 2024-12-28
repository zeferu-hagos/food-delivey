// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import adminAuthSlice from './slices/adminSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    adminAuth: adminAuthSlice,
  },
});

export default store;
