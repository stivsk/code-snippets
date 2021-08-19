import htmlParse from 'html-react-parser';
import { BLANK_LINE } from '../../constants/commons';
import { ICodeSnippet } from '../../interfaces/ICodeSnippet';

/**
 * This class was created to demostrate liskov substitution principle,
 * therefore it's implementation uses just the basics
 */
export class JavascriptCodeSnippet implements ICodeSnippet {
  getSnipperDescription(): string {
    return 'Shows an alert in the browser';
  }

  parse(): any {
    return htmlParse(this.getSnippetStructure().join(BLANK_LINE));
  }

  getSnippetStructure(): string[] {
    const snippetThumbnail =
      '<img alt="example" src="https://www.codingdiv.com/wp-content/uploads/2021/02/javascript_alert_img.png"/>';

    return [snippetThumbnail, this.getCodeSnippetAsString()];
  }

  getCodeSnippetAsString(): string {
    return '<script>alert("Hello");</script>';
  }

  getSnippetId(): string {
    return 'snpt_06';
  }

  getSnippetCategory(): string {
    return 'html';
  }
}
