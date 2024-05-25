// App.js

import React, { useState } from 'react';
import './App.css';

const Circle = ({ onClick }) => (
  <div className="circle" onClick={onClick}>
    😊
  </div>
);

const Frame = ({ isOpen }) => (
  <div className="frame" style={{ display: isOpen ? 'block' : 'none' }}>
    <InputField />
    <OutputTextArea />
    <Button />
  </div>
);

const InputField = () => (
  <input type="text" placeholder="Enter your text" className="input-field" />
);

const OutputTextArea = () => (
  <textarea placeholder="Output text" className="output-textarea"></textarea>
);

const Button = () => (
  <button className="button" onClick={() => {}}>
    Ask
  </button>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Circle onClick={toggleForm} />
      <Frame isOpen={isOpen} />
    </>
  );
};

export default App;
