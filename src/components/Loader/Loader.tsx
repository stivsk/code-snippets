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
    <>
      <div className="load">
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <h3
        style={{
          top: '60%',
          position: 'absolute',
          color: 'white',
          left: 0,
          right: 0,
        }}
      >
        {typedLoadingText}
      </h3>
    </>
  );
};

export default Loader;
