import { IElementBasis } from './IElementBasis';
import { ISnippetEntity } from './ISnippetEntity';

export interface IHtmlSnippetEntity extends ISnippetEntity {
  className: string;
  pseudoElements: IElementBasis[];
  childElements: IElementBasis[];
}
