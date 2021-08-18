/* eslint-disable no-unused-vars */
import { ICodeSnippet } from './ICodeSnippet';
import { IHtmlCodeSnippetBuilder } from './IHtmlCodeSnippetBuilder';

export interface IHtmlCodeSnippet extends ICodeSnippet {
  snippetBuilder: IHtmlCodeSnippetBuilder;
}
