import { createSlice } from '@reduxjs/toolkit';
import { SNIPPETS_SLICE_ACTION_ID } from '../../constants/actionsIds';
import {
  FAILURE_STATUS,
  INIT_STATUS,
  LOADING_STATUS,
  SUCCESS_STATUS,
} from '../../constants/status';
import { IServiceStatus } from '../../interfaces/IServiceStatus';
import { IHtmlCodeSnippetsEntity } from '../../interfaces/IHtmlCodeSnippetsEntity';
import { fetchSnippetsAsync } from './snippetsActions';

export interface SnippetsState extends IServiceStatus {
  data: IHtmlCodeSnippetsEntity;
  error: any;
}

const initialState: SnippetsState = {
  data: {
    snippets: [],
  },
  status: INIT_STATUS,
  error: {},
};

export const snippetsSlice = createSlice({
  name: SNIPPETS_SLICE_ACTION_ID,
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSnippetsAsync.pending, state => {
        state.status = LOADING_STATUS;
      })
      .addCase(fetchSnippetsAsync.fulfilled, (state, action) => {
        state.status = SUCCESS_STATUS;
        state.data = action.payload;
      })
      .addCase(fetchSnippetsAsync.rejected, (state, action) => {
        state.status = FAILURE_STATUS;
        state.error = action.payload;
      });
  },
});

export default snippetsSlice.reducer;
