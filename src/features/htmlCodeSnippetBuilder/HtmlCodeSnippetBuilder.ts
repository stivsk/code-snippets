import beautify from 'simply-beautiful';
import toDiffableHtml from 'diffable-html';

import { IHtmlCodeSnippetEntity } from '../../interfaces/IHtmlCodeSnippetEntity';
import { IHtmlCodeSnippetBuilder } from '../../interfaces/IHtmlCodeSnippetBuilder';
import { IMarkupHandler } from '../../interfaces/IMarkupHandler';
import { IStylesHandler } from '../../interfaces/IStylesHandler';

const BLANK_LINE = '\n';

export class HtmlCodeSnippetBuilder implements IHtmlCodeSnippetBuilder {
  snippet: IHtmlCodeSnippetEntity;

  markupHandler: IMarkupHandler;

  stylesHandler: IStylesHandler;

  constructor(
    snippet: IHtmlCodeSnippetEntity,
    markupHandler: IMarkupHandler,
    stylesHandler: IStylesHandler
  ) {
    this.snippet = snippet;
    this.markupHandler = markupHandler;
    this.stylesHandler = stylesHandler;
  }

  createInnerElementsMarkup(): string {
    const { childElements } = this.snippet;

    return childElements
      .map(childElement =>
        this.markupHandler.getHtmlMarkup({ type: childElement.type })
      )
      .join(BLANK_LINE);
  }

  getHtmlMarkup(): string {
    const { type, className } = this.snippet;

    return this.markupHandler.getHtmlMarkup({
      type,
      className,
      innerMarkup: this.createInnerElementsMarkup(),
    });
  }

  getElementStyles(): string {
    const elementStyles = [
      this.stylesHandler.getClassStyle(),
      this.stylesHandler.getInnerElementsStyle(),
      this.stylesHandler.getPseudoElementsStyle(),
      this.stylesHandler.getElementAnimation(),
    ];

    return beautify.css(elementStyles.join(BLANK_LINE));
  }

  formatContent(content: string): string {
    return toDiffableHtml(content);
  }

  getContentStructure(): string[] {
    const innerMarkupStyle = this.getElementStyles();

    return [
      this.markupHandler.getStyleMarkup(innerMarkupStyle),
      this.getHtmlMarkup(),
    ];
  }

  getContentStructureAsString(): string {
    return this.formatContent(this.getContentStructure().join(BLANK_LINE));
  }
}
