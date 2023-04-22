import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
global.jQuery = require('jquery');
require('bootstrap');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


