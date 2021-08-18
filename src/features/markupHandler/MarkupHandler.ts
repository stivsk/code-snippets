import {
  CLASS_REPLACE_KEY,
  EMPTY_CLASS_KEY,
  EMPTY_STRING,
  HTML_MARKUP_STRUCTURE,
  INNER_MARKUP_REPLACE_KEY,
  MARKUP_REPLACE_KEY,
  STYLE_MARKUP_STRUCTURE,
  STYLE_REPLACE_KEY,
} from '../../constants/commons';
import { IMarkupHandler } from '../../interfaces/IMarkupHandler';

export class MarkupHandler implements IMarkupHandler {
  getHtmlMarkup({ type, className = '', innerMarkup = '' }: any): string {
    let htmlMarkup = HTML_MARKUP_STRUCTURE.replaceAll(MARKUP_REPLACE_KEY, type)
      .replace(CLASS_REPLACE_KEY, className)
      .replace(INNER_MARKUP_REPLACE_KEY, innerMarkup);

    if (!className) {
      htmlMarkup = htmlMarkup.replace(EMPTY_CLASS_KEY, EMPTY_STRING);
    }

    return htmlMarkup;
  }

  getStyleMarkup(style: string): string {
    return STYLE_MARKUP_STRUCTURE.replace(STYLE_REPLACE_KEY, style);
  }
}
