import React from 'react';
import Highlight from 'react-highlight';
import { useSimulateTyping } from '../../hooks/useSimulateTyping';

export interface CodeSnippetProps {
  snippetRenderCode(): Function;
  snippetTypingCode: string;
  language: string;
}

const TYPING_DELAY = 10;

const CodeSnippet: React.FunctionComponent<CodeSnippetProps> = ({
  snippetRenderCode,
  snippetTypingCode,
  language,
}: CodeSnippetProps) => {
  const typedCode = useSimulateTyping(snippetTypingCode, TYPING_DELAY);

  return (
    <>
      <div style={{ position: 'relative', height: '50%' }}>
        {snippetRenderCode()}
      </div>
      <Highlight className={language}>{typedCode}</Highlight>
    </>
  );
};

export default CodeSnippet;
