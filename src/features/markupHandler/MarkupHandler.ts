import beautify from 'simply-beautiful';

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
  beautify(code: string, indentSize: number): string {
    return beautify.html(code, { indent_size: indentSize });
  }

  getHtmlMarkup({ type, className = '', innerMarkup = '' }: any): string {
    const htmlMarkup = HTML_MARKUP_STRUCTURE.replaceAll(
      MARKUP_REPLACE_KEY,
      type
    )
      .replace(CLASS_REPLACE_KEY, className)
      .replace(INNER_MARKUP_REPLACE_KEY, innerMarkup);

    return className
      ? htmlMarkup
      : htmlMarkup.replace(EMPTY_CLASS_KEY, EMPTY_STRING);
  }

  getStyleMarkup(style: string): string {
    return STYLE_MARKUP_STRUCTURE.replace(STYLE_REPLACE_KEY, style);
  }
}
