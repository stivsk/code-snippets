/* eslint-disable no-unused-vars */
import { IHtmlCodeSnippetEntity } from './IHtmlCodeSnippetEntity';
import { IHtmlBasicStructure } from './IHtmlBasicStructure';

export interface IHtmlCodeSnippet {
  snippet: IHtmlCodeSnippetEntity;
  snippetStructure: string;
  createStylesMarkup(): string;
  createHtmlMarkup(): string;
  mapPseudoElementsStyle(): string;
  mapPseudoElementStyle(pseudo: IHtmlBasicStructure, className: string): string;
  createInnerElementsMarkup(): string;
  mapClassStyle(): string;
  replaceMarkup({ type, className, innerMarkup }: any): string;
  mapInnerElementsStyle(): string;
}
