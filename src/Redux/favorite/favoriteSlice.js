import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addFavorite(state, action) {
      state.push({id: action.payload});
    },
    removeFavorite(state, action) {
      return state.filter((favorite) => favorite?.id !== action.payload);
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
