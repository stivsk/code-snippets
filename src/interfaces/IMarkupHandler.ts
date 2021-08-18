/* eslint-disable no-unused-vars */
export interface IMarkupHandler {
  getStyleMarkup(style: string): string;
  getHtmlMarkup({ type, className, innerMarkup }: any): string;
  beautify(code: string, indentSize: number): string;
}
