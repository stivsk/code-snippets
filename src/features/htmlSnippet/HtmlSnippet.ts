import { IElementBasis } from '../../interfaces/IElementBasis';
import { IHtmlSnippet } from '../../interfaces/IHtmlSnippet';
import { ISnippetEntity } from '../../interfaces/ISnippetEntity';

class HtmlSnippet implements IHtmlSnippet {
  snippet: ISnippetEntity;

  constructor(snippet: ISnippetEntity) {
    this.snippet = snippet;
  }

  getElementType(): string {
    throw new Error('Method not implemented.');
  }

  getElementClass(): string {
    throw new Error('Method not implemented.');
  }

  getElementStyle(): string {
    throw new Error('Method not implemented.');
  }

  getElementCategory(): string {
    throw new Error('Method not implemented.');
  }

  getPseudoElements(): IElementBasis[] {
    throw new Error('Method not implemented.');
  }

  getChildElements(): IElementBasis[] {
    throw new Error('Method not implemented.');
  }

  getSnippetAsString(): string {
    return JSON.stringify(this.snippet);
  }
}

export default HtmlSnippet;
