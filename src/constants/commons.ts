export const CLASS_REPLACE_KEY: string = '[CLASS]';
export const STYLE_REPLACE_KEY: string = '[STYLE]';
export const PSEUDO_SELECTOR_REPLACE_KEY: string = '[PSEUDO]';
export const INNER_ELEMENT_REPLACE_KEY = '[INNER_ELEMENT]';
export const MARKUP_REPLACE_KEY = '[MARKUP]';
export const INNER_MARKUP_REPLACE_KEY = '[INNER_MARKUP]';

export const STYLE_MARKUP_STRUCTURE = `<style>${STYLE_REPLACE_KEY}</style>`;
export const HTML_MARKUP_STRUCTURE = `<${MARKUP_REPLACE_KEY} class="${CLASS_REPLACE_KEY}">${INNER_MARKUP_REPLACE_KEY}</${MARKUP_REPLACE_KEY}>`;

export const CSS_CLASS_STRUCTURE: string = `.${CLASS_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;
export const PSEUDO_ELEMENT_STYLE_STRUCTURE: string = `.${CLASS_REPLACE_KEY}${PSEUDO_SELECTOR_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;
export const INNER_ELEMENT_STYLE_STRUCTURE: string = `.${CLASS_REPLACE_KEY} ${INNER_ELEMENT_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;

export const UNIQUE_IDENTIFIER_KEY: string = 'type';
export const BLANK_LINE: string = '\n';
export const EMPTY_CLASS_KEY: string = 'class=""';
export const EMPTY_STRING: string = '';
export const HTML_SWIPER_HISTORY_KEY = 'snippet/html';
export const HTML_SWIPER_DIRECTION = 'vertical';

export const LOADING_MESSAGE = 'Loading Snippets...';
