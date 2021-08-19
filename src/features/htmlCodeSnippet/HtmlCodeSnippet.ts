import htmlParse from 'html-react-parser';
import { ICodeSnippetBuilder } from '../../interfaces/ICodeSnippetBuilder';
import { IHtmlCodeSnippet } from '../../interfaces/IHtmlCodeSnippet';

export class HtmlCodeSnippet implements IHtmlCodeSnippet {
  snippetBuilder: ICodeSnippetBuilder;

  constructor(snippetBuilder: ICodeSnippetBuilder) {
    this.snippetBuilder = snippetBuilder;
  }

  getSnipperDescription(): string {
    return this.snippetBuilder.snippet.description;
  }

  parse(): any {
    return htmlParse(this.getCodeSnippetAsString());
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
