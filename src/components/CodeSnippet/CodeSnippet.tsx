import React from 'react';
import Highlight from 'react-highlight';
import { useSimulateTyping } from '../../hooks/useSimulateTyping';

export interface CodeSnippetProps {
  snippetRenderCode(): any;
  snippetTypingCode: string;
  language: string;
}

const CodeSnippet: React.FunctionComponent<CodeSnippetProps> = ({
  snippetRenderCode,
  snippetTypingCode,
  language,
}) => {
  const [typedCode] = useSimulateTyping(snippetTypingCode, 10);

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
