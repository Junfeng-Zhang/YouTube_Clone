import React from 'react';
import ReactDOM from 'react-dom/client'; // React V18 改变

import App from './App';
import './index.css';

// 应用程序的根目录，这是整个React应用程序中唯一一个真正从 dom 中获取数据的地方
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
