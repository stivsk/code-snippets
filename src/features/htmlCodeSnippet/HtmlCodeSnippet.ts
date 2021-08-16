import { IHtmlCodeSnippetEntity } from '../../interfaces/IHtmlCodeSnippetEntity';
import { ICodeSnippet } from '../../interfaces/ICodeSnippet';
import { IHtmlBasicStructure } from '../../interfaces/IHtmlBasicStructure';
import { IHtmlCodeSnippet } from '../../interfaces/IHtmlCodeSnippet';

const CLASS_REPLACE_KEY: string = '[CLASS]';
const STYLE_REPLACE_KEY: string = '[STYLE]';
const PSEUDO_SELECTOR_REPLACE_KEY: string = '[PSEUDO]';
const MARKUP_REPLACE_KEY = '[MARKUP]';
const INNER_MARKUP_REPLACE_KEY = '[INNER_MARKUP]';

const CSS_CLASS_STRUCTURE: string = `.${CLASS_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;
const PSEUDO_ELEMENT_STYLE_STRUCTURE = `.${CLASS_REPLACE_KEY}::${PSEUDO_SELECTOR_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;
const STYLE_MARKUP_STRUCTURE = `<style>${STYLE_REPLACE_KEY}</style>`;
const HTML_MARKUP_STRUCTURE = `<${MARKUP_REPLACE_KEY} class="${CLASS_REPLACE_KEY}">${INNER_MARKUP_REPLACE_KEY}</${MARKUP_REPLACE_KEY}>`;

export class HtmlCodeSnippet implements IHtmlCodeSnippet, ICodeSnippet {
  snippet: IHtmlCodeSnippetEntity;

  snippetStructure: string = '';

  constructor(snippet: IHtmlCodeSnippetEntity) {
    this.snippet = snippet;
  }

  mapClassStyle(): string {
    const { style, className } = this.snippet;

    return CSS_CLASS_STRUCTURE.replace(CLASS_REPLACE_KEY, className).replace(
      STYLE_REPLACE_KEY,
      style
    );
  }

  mapPseudoElementStyle(
    pseudoElement: IHtmlBasicStructure,
    className: string
  ): string {
    const { type, style } = pseudoElement;

    return PSEUDO_ELEMENT_STYLE_STRUCTURE.replace(CLASS_REPLACE_KEY, className)
      .replace(PSEUDO_SELECTOR_REPLACE_KEY, type)
      .replace(STYLE_REPLACE_KEY, style);
  }

  mapPseudoElementsStyle(): string {
    const { pseudoElements, className } = this.snippet;

    const mappedPseudoElementStyles = pseudoElements.map(pseudoElement =>
      this.mapPseudoElementStyle(pseudoElement, className)
    );

    return mappedPseudoElementStyles.join('\n');
  }

  createStylesMarkup(): string {
    const innerMarkupStyle = `
      ${this.mapClassStyle()}
      ${this.mapPseudoElementsStyle()}
    `;

    return STYLE_MARKUP_STRUCTURE.replace(STYLE_REPLACE_KEY, innerMarkupStyle);
  }

  createInnerElementsMarkup(): string {
    // todo: map inner html snippet elements
    return '';
  }

  createHtmlMarkup(): string {
    const { type: htmlElementType, className } = this.snippet;

    const containerElement = HTML_MARKUP_STRUCTURE.replace(
      MARKUP_REPLACE_KEY,
      htmlElementType
    )
      .replace(CLASS_REPLACE_KEY, className)
      .replace(INNER_MARKUP_REPLACE_KEY, this.createInnerElementsMarkup())
      .replace(MARKUP_REPLACE_KEY, htmlElementType);

    return containerElement;
  }

  buildSnippetStructure(): ICodeSnippet {
    this.snippetStructure = `
      ${this.createStylesMarkup()}
      ${this.createHtmlMarkup()}
    `;

    return this;
  }

  getCodeSnippetAsString(): string {
    return this.snippetStructure;
  }
}
