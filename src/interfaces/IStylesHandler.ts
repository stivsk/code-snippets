/* eslint-disable no-unused-vars */
import { ICodeSnippetEntity } from './ICodeSnippetEntity';
import { IHtmlBasicStructure } from './IHtmlBasicStructure';

export interface IStylesHandler {
  snippet: ICodeSnippetEntity;
  getClassStyle(): string;
  getInnerElementStyle(innerElement: IHtmlBasicStructure): string;
  getInnerElementsStyle(): string;
  getPseudoElementStyle(pseudoElement: IHtmlBasicStructure): string;
  getPseudoElementsStyle(): string;
  getElementAnimation(): string;
  beautify(code: string, indentSize: number): string;
}
