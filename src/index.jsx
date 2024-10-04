import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Pastikan file ini ada dan diimpor jika diperlukan

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
