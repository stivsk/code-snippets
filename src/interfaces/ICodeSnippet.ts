export interface ICodeSnippet {
  parse(): any;
  getSnippetStructure(): string[];
  getCodeSnippetAsString(): string;
  getSnippetId(): string;
  getSnippetCategory(): string;
  getSnipperDescription(): string;
}
