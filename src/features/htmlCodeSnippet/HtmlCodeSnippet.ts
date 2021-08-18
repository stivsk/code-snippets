import { IHtmlCodeSnippet } from '../../interfaces/IHtmlCodeSnippet';
import { IHtmlCodeSnippetBuilder } from '../../interfaces/IHtmlCodeSnippetBuilder';

export class HtmlCodeSnippet implements IHtmlCodeSnippet {
  snippetBuilder: IHtmlCodeSnippetBuilder;

  constructor(snippetBuilder: IHtmlCodeSnippetBuilder) {
    this.snippetBuilder = snippetBuilder;
  }

  getSnippetId(): string {
    return this.snippetBuilder.snippet.id;
  }

  getSnippetCategory(): string {
    return this.snippetBuilder.snippet.category;
  }

  getSnippetStructure(): string[] {
    return this.snippetBuilder.getContentStructure();
  }

  getCodeSnippetAsString(): string {
    return this.snippetBuilder.getContentStructureAsString();
  }
}
