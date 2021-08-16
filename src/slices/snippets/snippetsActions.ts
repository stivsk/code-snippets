import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_SNIPPETS_ACTION_ID } from '../../constants/actionsIds';
import { fetchSnippets } from '../../services/snippetsAPI';

export const fetchSnippetsAsync = createAsyncThunk(
  FETCH_SNIPPETS_ACTION_ID,
  async () => {
    const response = await fetchSnippets();
    return response.data;
  }
);
