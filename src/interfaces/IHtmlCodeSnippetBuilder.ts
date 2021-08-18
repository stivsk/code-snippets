/* eslint-disable no-unused-vars */
import { ICodeSnippetBuilder } from './ICodeSnippetBuilder';
import { IHtmlCodeSnippetEntity } from './IHtmlCodeSnippetEntity';
import { IMarkupHandler } from './IMarkupHandler';
import { IStylesHandler } from './IStylesHandler';

export interface IHtmlCodeSnippetBuilder extends ICodeSnippetBuilder {
  snippet: IHtmlCodeSnippetEntity;
  markupHandler: IMarkupHandler;
  stylesHandler: IStylesHandler;
  createInnerElementsMarkup(): string;
  getHtmlMarkup(): string;
  getElementStyles(): string;
}
