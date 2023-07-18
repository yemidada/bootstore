import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: '',
  },
  reducers: {
    checkStatus: (state, action) => {
      state.status = action.payload === '' ? 'Under construction' : '';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
