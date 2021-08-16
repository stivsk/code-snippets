import { ICodeSnippet } from './ICodeSnippet';

export interface IPrintCodeSnippets {
  snippets: ICodeSnippet[];
  getPrintable(): string;
}
