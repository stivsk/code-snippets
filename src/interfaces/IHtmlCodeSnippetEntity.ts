import { IHtmlBasicStructure } from './IHtmlBasicStructure';

export interface IHtmlCodeSnippetEntity {
  id: string;
  type: string;
  className: string;
  style: string;
  category: string;
  innerText: string;
  pseudoElements: IHtmlBasicStructure[];
  childElements: IHtmlBasicStructure[];
  animation: string;
}
