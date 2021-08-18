export interface ICodeSnippet {
  getSnippetStructure(): string[];
  getCodeSnippetAsString(): string;
  getSnippetId(): string;
  getSnippetCategory(): string;
}
