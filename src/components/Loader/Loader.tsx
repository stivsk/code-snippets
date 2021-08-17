import React from 'react';

import './Loader.css';

export interface LoaderProps {}

const Loader: React.FunctionComponent<LoaderProps> = () => (
  <div className="load">
    <hr />
    <hr />
    <hr />
    <hr />
  </div>
);

export default Loader;
