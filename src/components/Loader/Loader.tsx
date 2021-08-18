import React from 'react';
import { useSimulateTyping } from '../../hooks/useSimulateTyping';

import './Loader.css';

export interface LoaderProps {
  loadingText: string;
}

const Loader: React.FunctionComponent<LoaderProps> = ({
  loadingText = 'Loading',
}: LoaderProps) => {
  const typedLoadingText = useSimulateTyping(loadingText, 30);

  return (
    <div className="loader_container">
      <div className="load">
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <h3 className="title">{typedLoadingText}</h3>
    </div>
  );
};

export default Loader;
