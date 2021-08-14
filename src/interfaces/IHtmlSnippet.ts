import { ICodeSnippet } from './ICodeSnippet';
import { IElementBasis } from './IElementBasis';
import { ISnippetEntity } from './ISnippetEntity';

export interface IHtmlSnippet extends ICodeSnippet {
  snippet: ISnippetEntity;
  getElementType(): string;
  getElementClass(): string;
  getElementStyle(): string;
  getElementCategory(): string;
  getPseudoElements(): IElementBasis[];
  getChildElements(): IElementBasis[];
}
