/* eslint-disable no-unused-vars */
import { ICodeSnippetEntity } from './ICodeSnippetEntity';

export interface ICodeSnippetBuilder {
  snippet: ICodeSnippetEntity;
  formatContent(content: string): string;
  getContentStructure(): string[];
  getContentStructureAsString(): string;
}
