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
      state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
