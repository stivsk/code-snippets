import _ from 'lodash';
import { IHtmlBasicStructure } from '../../interfaces/IHtmlBasicStructure';
import { IHtmlCodeSnippetEntity } from '../../interfaces/IHtmlCodeSnippetEntity';
import { IStylesHandler } from '../../interfaces/IStylesHandler';

const CLASS_REPLACE_KEY: string = '[CLASS]';
const STYLE_REPLACE_KEY: string = '[STYLE]';
const PSEUDO_SELECTOR_REPLACE_KEY: string = '[PSEUDO]';
const INNER_ELEMENT_REPLACE_KEY = '[INNER_ELEMENT]';

const CSS_CLASS_STRUCTURE: string = `.${CLASS_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;
const PSEUDO_ELEMENT_STYLE_STRUCTURE = `.${CLASS_REPLACE_KEY}${PSEUDO_SELECTOR_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;
const INNER_ELEMENT_STYLE_STRUCTURE = `.${CLASS_REPLACE_KEY} ${INNER_ELEMENT_REPLACE_KEY}{ ${STYLE_REPLACE_KEY} }`;

const UNIQUE_IDENTIFIER_KEY = 'type';

export class StylesHandler implements IStylesHandler {
  snippet: IHtmlCodeSnippetEntity;

  constructor(snippet: IHtmlCodeSnippetEntity) {
    this.snippet = snippet;
  }

  getElementAnimation(): string {
    return `\n${this.snippet.animation}`;
  }

  getPseudoElementStyle(pseudoElement: IHtmlBasicStructure): string {
    const { type, style } = pseudoElement;

    return PSEUDO_ELEMENT_STYLE_STRUCTURE.replace(
      CLASS_REPLACE_KEY,
      this.snippet.className
    )
      .replace(PSEUDO_SELECTOR_REPLACE_KEY, type)
      .replace(STYLE_REPLACE_KEY, style);
  }

  getPseudoElementsStyle(): string {
    const { pseudoElements } = this.snippet;

    const mappedPseudoElementStyles = pseudoElements.map(pseudoElement =>
      this.getPseudoElementStyle(pseudoElement)
    );

    return mappedPseudoElementStyles.join('\n');
  }

  getInnerElementsStyle(): string {
    const { childElements } = this.snippet;

    return _.uniqBy(childElements, UNIQUE_IDENTIFIER_KEY)
      .map(childElement => this.getInnerElementStyle(childElement))
      .join('\n');
  }

  getInnerElementStyle(innerElement: IHtmlBasicStructure): string {
    const { type, style } = innerElement;

    return INNER_ELEMENT_STYLE_STRUCTURE.replace(
      CLASS_REPLACE_KEY,
      this.snippet.className
    )
      .replace(INNER_ELEMENT_REPLACE_KEY, type)
      .replace(STYLE_REPLACE_KEY, style);
  }

  getClassStyle(): string {
    const { style, className } = this.snippet;

    return CSS_CLASS_STRUCTURE.replace(CLASS_REPLACE_KEY, className).replace(
      STYLE_REPLACE_KEY,
      style
    );
  }
}
