import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL, appId } from '../../utils/constants';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios.get(`${baseURL}/${appId}/books`);
    return response.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (params, { dispatch }) => {
    const response = await axios.post(
      `${baseURL}/${appId}/books`, params,
    );
    dispatch(getBooks());
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (params, { dispatch }) => {
    const response = await axios.delete(
      `${baseURL}/${appId}/books/${params}`,
    );
    dispatch(getBooks());
    return response.data;
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.loading = false;
        // Iterate through the object
        state.books = payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.loading = false;
      });
  },

});

export default booksSlice.reducer;
