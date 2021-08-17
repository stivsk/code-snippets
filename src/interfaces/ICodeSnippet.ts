export interface ICodeSnippet {
  id: string;
  category: string;
  getSnippetStructure(): string[];
  getCodeSnippetAsString(): string;
}
