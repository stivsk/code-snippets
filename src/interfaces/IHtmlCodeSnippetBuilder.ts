/* eslint-disable no-unused-vars */
import { ICodeSnippetBuilder } from './ICodeSnippetBuilder';
import { IHtmlCodeSnippetEntity } from './IHtmlCodeSnippetEntity';
import { IMarkupHandler } from './IMarkupHandler';

export interface IHtmlCodeSnippetBuilder extends ICodeSnippetBuilder {
  snippet: IHtmlCodeSnippetEntity;
  markupHandler: IMarkupHandler;
  createInnerElementsMarkup(): string;
  getHtmlMarkup(): string;
  getElementStyles(): string;
}
