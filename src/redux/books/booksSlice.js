import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [
    ],
  },
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      if (action.payload > -1) {
        state.books.splice(action.payload, 1);
      }
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
