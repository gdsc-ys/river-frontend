import '@styles/normalize.css';
import '@styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import Linechart from '@components/common/Chart/Linechart';
import { mockData2 } from '@components/common/Chart/mockdata';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);
root.render(
  <div>
    <Linechart data={mockData2} Xaccessor="timestamp" Yaccessor="value" />
  </div>,
);
