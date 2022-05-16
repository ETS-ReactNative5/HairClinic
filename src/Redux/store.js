import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './favorite/favoriteSlice';

const store = configureStore({
  reducer: {
    favorite: favoriteSlice
  }
});

export default store;
