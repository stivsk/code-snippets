import { IMarkupHandler } from '../../interfaces/IMarkupHandler';

const MARKUP_REPLACE_KEY = '[MARKUP]';
const INNER_MARKUP_REPLACE_KEY = '[INNER_MARKUP]';
const STYLE_REPLACE_KEY: string = '[STYLE]';
const CLASS_REPLACE_KEY: string = '[CLASS]';
const EMPTY_CLASS_KEY: string = 'class=""';
const EMPTY_STRING: string = '';

const STYLE_MARKUP_STRUCTURE = `<style>${STYLE_REPLACE_KEY}</style>`;
const HTML_MARKUP_STRUCTURE = `<${MARKUP_REPLACE_KEY} class="${CLASS_REPLACE_KEY}">${INNER_MARKUP_REPLACE_KEY}</${MARKUP_REPLACE_KEY}>`;

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
