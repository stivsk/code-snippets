/* eslint-disable no-unused-vars */
import { IHtmlCodeSnippetEntity } from './IHtmlCodeSnippetEntity';
import { IHtmlBasicStructure } from './IHtmlBasicStructure';
import { ICodeSnippet } from './ICodeSnippet';

export interface IHtmlCodeSnippet extends ICodeSnippet {
  snippet: IHtmlCodeSnippetEntity;
  getStylesMarkup(): string;
  getHtmlMarkup(): string;
  mapPseudoElementsStyle(): string;
  mapPseudoElementStyle(pseudo: IHtmlBasicStructure, className: string): string;
  createInnerElementsMarkup(): string;
  mapClassStyle(): string;
  replaceMarkup({ type, className, innerMarkup }: any): string;
  mapInnerElementsStyle(): string;
  getElementStyles(): string;
}
