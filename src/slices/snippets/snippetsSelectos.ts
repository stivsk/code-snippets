import { RootState } from '../../app/store';

export const selectSnippetData = (state: RootState) => state.snippets;
export const selectSnippetsArray = (state: RootState) =>
  state.snippets.data.snippets;
