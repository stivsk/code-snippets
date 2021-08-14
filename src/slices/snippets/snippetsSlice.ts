import { createSlice } from '@reduxjs/toolkit';
import {
  FAILURE_STATUS,
  INIT_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
} from '../../constants/status';
import Snippet from '../../entities/HtmlSnippetEntity';
import { ISnippetsEntity } from '../../interfaces/ISnippetsEntity';
import { fetchSnippetsAsyncAction } from './snippetsActions';

export interface SnippetsState {
  data: ISnippetsEntity;
  status: 'init' | 'loading' | 'success' | 'failure';
  error: any;
}

const initialState: SnippetsState = {
  data: {
    snippets: [new Snippet()],
  },
  status: INIT_STATUS,
  error: {},
};

export const snippetsSlice = createSlice({
  name: 'snippets',
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSnippetsAsyncAction.pending, state => {
        state.status = LOADING_STATUS;
      })
      .addCase(fetchSnippetsAsyncAction.fulfilled, (state, action) => {
        state.status = SUCCESS_STATUS;
        state.data = action.payload;
      })
      .addCase(fetchSnippetsAsyncAction.rejected, (state, action) => {
        state.status = FAILURE_STATUS;
        state.error = action.payload;
      });
  },
});

export const actions = {
  ...snippetsSlice.actions,
  fetchSnippetsAsync: fetchSnippetsAsyncAction,
};

export default snippetsSlice.reducer;
