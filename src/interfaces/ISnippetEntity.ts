import { IElementBasis } from './IElementBasis';

export interface ISnippetEntity extends IElementBasis {
  category: 'HTML' | 'CSS' | 'JS';
}
