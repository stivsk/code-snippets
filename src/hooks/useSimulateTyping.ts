import { useState, useEffect, useCallback } from 'react';

/**
 * @param text string
 * @param delay number
 * @returns  [typingText, setTypingText]
 */
export const useSimulateTyping = (text: string = '', delay: number = 50) => {
  const [typingText, setTypingText] = useState('');

  const memoizedTypingDelay = useCallback(
    async (letter: string, index: number): Promise<void> =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(setTypingText(typedText => typedText + letter));
        }, 500 + index * delay);
      }),
    [delay]
  );

  const memoizedTypeEnteredText = useCallback(() => {
    Array.from(text).forEach(async (letter, index) => {
      await memoizedTypingDelay(letter, index);
    });
  }, [memoizedTypingDelay, text]);

  useEffect(() => {
    memoizedTypeEnteredText();
  }, [memoizedTypeEnteredText, text]);

  return typingText;
};
