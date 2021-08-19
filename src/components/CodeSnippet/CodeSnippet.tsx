import React from 'react';
import Highlight from 'react-highlight';
import { useSimulateTyping } from '../../hooks/useSimulateTyping';

import './codeSnippet.css';

export interface CodeSnippetProps {
  snippetRenderCode(): Function;
  snippetTypingCode: string;
  language: string;
  description: string;
}

const TYPING_DELAY = 10;

const CodeSnippet: React.FunctionComponent<CodeSnippetProps> = ({
  snippetRenderCode,
  snippetTypingCode,
  language,
  description,
}: CodeSnippetProps) => {
  const typedCode = useSimulateTyping(snippetTypingCode, TYPING_DELAY);
  const typedDescription = useSimulateTyping(description);

  return (
    <>
      <div className="codeSnippetPreview">{snippetRenderCode()}</div>
      <Highlight className={language}>{typedCode}</Highlight>
      <div className="codeSnippetDescription">
        <p>{typedDescription}</p>
      </div>
    </>
  );
};

export default CodeSnippet;
