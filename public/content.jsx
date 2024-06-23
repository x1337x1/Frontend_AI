import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axiosClient from '../src/config/axios'
import getBrowserFingerprint from 'get-browser-fingerprint';
import './bubble.css'; // Import the CSS file

function Bubble() {
  const [isOpen , setIsOpen] = useState(false);
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
    setOutputText(`"Just a whisper! I'm almost there...`);
    axiosClient.post('/query', {
      query: inputText,
      chat_history:[],
      namespace: getBrowserFingerprint(),
      tenant_id: getBrowserFingerprint()
    }).then(response => {
      console.log('API Response:', response.data);
      // Update outputText with the response if needed
      setOutputText(`${response.data}`); // Adjust based on your API response structure
    })
    .catch(error => {
      console.error('Error sending request:', error);
    });
    console.log("question was sent to the model")  
  };

console.log("text field::", inputText)

  useEffect(() => {
    // Log the current URL
    console.log('Current URL:', window.location.href);

    // Send a message to the background script
    chrome.runtime.sendMessage({
      action: 'logURL',
      url: window.location.href
    });

    axiosClient.post('/train/website', {
      website: window.location.href,
      data_type: "website",
      namespace: getBrowserFingerprint(),
      tenant_id: getBrowserFingerprint()
    } )
    console.log("Current Url is being trained by the model")
  }, []); // Empty dependency array means this runs once when the component mounts



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
