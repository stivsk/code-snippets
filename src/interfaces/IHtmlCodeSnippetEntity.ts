import { ICodeSnippetEntity } from './ICodeSnippetEntity';
import { IHtmlBasicStructure } from './IHtmlBasicStructure';

export interface IHtmlCodeSnippetEntity extends ICodeSnippetEntity {
  className: string;
  style: string;
  description: string;
  pseudoElements: IHtmlBasicStructure[];
  childElements: IHtmlBasicStructure[];
  animation: string;
}
