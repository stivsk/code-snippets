import { ICodeSnippet } from '../../interfaces/ICodeSnippet';
import { IPrintCodeSnippets } from '../../interfaces/IPrintCodeSnippets';

export class PrintCodeSnippets implements IPrintCodeSnippets {
  snippets: ICodeSnippet[];

  constructor(snippets: ICodeSnippet[]) {
    this.snippets = snippets;
  }

  getPrintableArray(): string[] {
    return this.snippets.map(snippet =>
      snippet.buildSnippetStructure().getCodeSnippetAsString()
    );
  }
}
