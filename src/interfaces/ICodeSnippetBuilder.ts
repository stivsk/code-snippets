/* eslint-disable no-unused-vars */
import { IHtmlCodeSnippetEntity } from './IHtmlCodeSnippetEntity';
import { IMarkupHandler } from './IMarkupHandler';
import { IStylesHandler } from './IStylesHandler';

export interface ICodeSnippetBuilder {
  snippet: IHtmlCodeSnippetEntity;
  markupHandler: IMarkupHandler;
  stylesHandler: IStylesHandler;
  formatContent(content: string): string;
  getContentStructure(): string[];
  getContentStructureAsString(): string;
}
