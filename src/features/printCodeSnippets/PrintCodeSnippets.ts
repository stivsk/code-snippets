import { ICodeSnippet } from '../../interfaces/ICodeSnippet';
import { IPrintCodeSnippets } from '../../interfaces/IPrintCodeSnippets';

export class PrintCodeSnippets implements IPrintCodeSnippets {
  snippets: ICodeSnippet[];

  constructor(snippets: ICodeSnippet[]) {
    this.snippets = snippets;
  }

  getPrintable(): string {
    let printable = '';

    this.snippets.forEach(snippet => {
      printable += snippet.buildSnippetStructure().getCodeSnippetAsString();
    });

    return printable;
  }
}
