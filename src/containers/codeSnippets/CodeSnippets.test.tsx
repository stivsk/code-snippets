import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CodeSnippets from './CodeSnippets';

import { store } from '../../app/store';

test('render CodeSnippets without crashing', () => {
  const codeSnippetsWrapper = render(
    <Provider store={store}>
      <CodeSnippets />
    </Provider>
  );

  expect(codeSnippetsWrapper.container).toBeInTheDocument();
});
