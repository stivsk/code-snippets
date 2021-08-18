/* eslint-disable no-unused-vars */
export interface IMarkupHandler {
  getStyleMarkup(style: string): string;
  getHtmlMarkup({ type, className, innerMarkup }: any): string;
}
