import { IHtmlBasicStructure } from '../interfaces/IHtmlBasicStructure';
import { IHtmlCodeSnippetEntity } from '../interfaces/IHtmlCodeSnippetEntity';

export class HtmlCodeSnippetEntity implements IHtmlCodeSnippetEntity {
  type: string = '';

  className: string = '';

  style: string = '';

  category: string = '';

  innerText: string = '';

  pseudoElements: IHtmlBasicStructure[] = [];

  childElements: IHtmlBasicStructure[] = [];
}
