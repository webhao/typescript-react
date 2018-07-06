import React, { SFC } from 'react';

import { HttpClient } from './core/http-client';

HttpClient.get<{username: string; password: string}>('http://localhost:8080/mock.json')
  .then(result => console.log(result))
  .catch(error => console.error(error));

export const App: SFC = () => (
  <h1>三江源大屏系统</h1>
);
