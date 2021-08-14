import { HTML } from '../constants/categories';
import { IElementBasis } from '../interfaces/IElementBasis';
import { IHtmlSnippetEntity } from '../interfaces/IHtmlSnippetEntity';

const DEFAULT_ELEMENT_TYPE = 'div';
const DEFAULT_SNIPPET_CATEGORY = HTML;

class HtmlSnippetEntity implements IHtmlSnippetEntity {
  className: string = '';

  category: 'HTML' | 'CSS' = DEFAULT_SNIPPET_CATEGORY;

  pseudoElements: IElementBasis[] = [];

  childElements: IElementBasis[] = [];

  type: string = DEFAULT_ELEMENT_TYPE;

  style: string = '';
}

export default HtmlSnippetEntity;
