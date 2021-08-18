/* eslint-disable no-unused-vars */
import { IHtmlBasicStructure } from './IHtmlBasicStructure';
import { IHtmlCodeSnippetEntity } from './IHtmlCodeSnippetEntity';

export interface IStylesHandler {
  snippet: IHtmlCodeSnippetEntity;
  getClassStyle(): string;
  getInnerElementStyle(innerElement: IHtmlBasicStructure): string;
  getInnerElementsStyle(): string;
  getPseudoElementStyle(pseudoElement: IHtmlBasicStructure): string;
  getPseudoElementsStyle(): string;
  getElementAnimation(): string;
}
