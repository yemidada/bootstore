import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [
      {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        item_id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        item_id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload.item_id);
    },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
