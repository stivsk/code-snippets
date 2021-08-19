import { IHtmlBasicStructure } from '../interfaces/IHtmlBasicStructure';
import { IHtmlCodeSnippetEntity } from '../interfaces/IHtmlCodeSnippetEntity';

export class HtmlCodeSnippetEntity implements IHtmlCodeSnippetEntity {
  id: string = '';

  type: string = '';

  className: string = '';

  style: string = '';

  category: string = '';

  description: string = '';

  pseudoElements: IHtmlBasicStructure[] = [];

  childElements: IHtmlBasicStructure[] = [];

  animation: string = '';
}
