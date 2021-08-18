/* eslint-disable no-unused-vars */
import { ICodeSnippetBuilder } from './ICodeSnippetBuilder';
import { IMarkupHandler } from './IMarkupHandler';
import { IStylesHandler } from './IStylesHandler';

export interface IHtmlCodeSnippetBuilder extends ICodeSnippetBuilder {
  markupHandler: IMarkupHandler;
  stylesHandler: IStylesHandler;
  createInnerElementsMarkup(): string;
  getHtmlMarkup(): string;
  getElementStyles(): string;
}
