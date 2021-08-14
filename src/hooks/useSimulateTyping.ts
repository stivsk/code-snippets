import { useState, useEffect, useCallback } from 'react';

export const useSimulateTyping = (text: string = '', speed: number = 50) => {
  const [typingText, setTypingText] = useState('');

  const memoizedTypingDelay = useCallback(
    async (letter: string, index: number): Promise<void> =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(setTypingText(typing => typing + letter));
        }, 500 + index * speed);
      }),
    [speed]
  );

  const memoizedTypeEnteredText = useCallback(() => {
    Array.from(text).forEach(async (letter, index) => {
      await memoizedTypingDelay(letter, index);
    });
  }, [memoizedTypingDelay, text]);

  useEffect(() => {
    memoizedTypeEnteredText();
  }, [memoizedTypeEnteredText, text]);

  return [typingText, setTypingText];
};
