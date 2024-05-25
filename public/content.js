import React from 'react';
import ReactDOM from 'react-dom';
import Bubble from '../public/Bubble'; // Assuming MyExtensionDiv.jsx is in the same directory

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<Bubble />, container);
