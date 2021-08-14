import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSnippets } from '../../services/snippetsAPI';

export const fetchSnippetsAsyncAction = createAsyncThunk(
  'snippets/fetch',
  async () => {
    const response = await fetchSnippets();
    return response.data;
  }
);
