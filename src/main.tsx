import React from 'react';
import { render } from 'react-dom';

import { App } from './app/app';

import './styles/vendor-styles';
import './styles/styles.scss';

render(
  <App />,
  document.getElementById('root'),
);
