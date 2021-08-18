/* eslint-disable no-unused-vars */
import { ICodeSnippet } from './ICodeSnippet';
import { ICodeSnippetBuilder } from './ICodeSnippetBuilder';

export interface IHtmlCodeSnippet extends ICodeSnippet {
  snippetBuilder: ICodeSnippetBuilder;
}
