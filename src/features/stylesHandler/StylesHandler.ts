import _ from 'lodash';
import beautify from 'simply-beautiful';

import {
  BLANK_LINE,
  CLASS_REPLACE_KEY,
  CSS_CLASS_STRUCTURE,
  INNER_ELEMENT_REPLACE_KEY,
  INNER_ELEMENT_STYLE_STRUCTURE,
  PSEUDO_ELEMENT_STYLE_STRUCTURE,
  PSEUDO_SELECTOR_REPLACE_KEY,
  STYLE_REPLACE_KEY,
  UNIQUE_IDENTIFIER_KEY,
} from '../../constants/commons';
import { IHtmlBasicStructure } from '../../interfaces/IHtmlBasicStructure';
import { IHtmlCodeSnippetEntity } from '../../interfaces/IHtmlCodeSnippetEntity';
import { IStylesHandler } from '../../interfaces/IStylesHandler';

export class StylesHandler implements IStylesHandler {
  snippet: IHtmlCodeSnippetEntity;

  constructor(snippet: IHtmlCodeSnippetEntity) {
    this.snippet = snippet;
  }

  getElementAnimation(): string {
    return this.snippet.animation;
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

    return mappedPseudoElementStyles.join(BLANK_LINE);
  }

  getInnerElementsStyle(): string {
    const { childElements } = this.snippet;

    return _.uniqBy(childElements, UNIQUE_IDENTIFIER_KEY)
      .map(childElement => this.getInnerElementStyle(childElement))
      .join(BLANK_LINE);
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

  beautify(code: string, indentSize: number): string {
    return beautify.css(code, {
      indent_size: indentSize,
    });
  }
}
