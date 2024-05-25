import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import myImage from './images/robot.png';

import './bubble.css'; // Import the CSS file

function Bubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');


  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    // Handle button click event, for example, process input text and update output text
    setOutputText(`Input Text: ${inputText}`);
  };

  return (
    <>
      <div
        className="bubble-container" // Use the defined class name
        onClick={toggleForm}
      >
       🫡
      </div>
      {isOpen && (
        <div className="form-container"> 
        <div>
        </div>
          <input
            type="text"
            placeholder="Ask me"
            value={inputText}
            onChange={handleInputChange}
            className="input-field" 
          />
          <textarea
            placeholder="Answer"
            value={outputText}
            readOnly
            className="textarea-field" 
          />
          <button
            onClick={handleButtonClick}
            className="button-field" 
          >
            Ask
          </button>
        </div>
      )}
    </>
  );
}

// Mount the React component onto a DOM element in the web page
function mountBubble() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<Bubble />, container);
}

// Run the mountBubble function when the content script is injected
mountBubble();
