import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axiosClient from '../src/config/axios'
import getBrowserFingerprint from 'get-browser-fingerprint';
import './bubble.css'; // Import the CSS file

function Bubble() {
  const [isOpen , setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState();
  const [contactId, setContactId] = useState('')
  const [isFetching, setIsFetching] = useState(false); // State for API request status



console.log('contact id',getBrowserFingerprint().toString())
  const toggleForm = () => {
    setIsOpen(!isOpen);
    const uuid = getBrowserFingerprint().toString()
    setContactId(uuid)
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTrainButton = async (e) => {
    try {
      const payload = {
        website: window.location.href,
        data_type: "website",
        namespace: contactId,
        tenant_id: contactId
        }
      const response = await axiosClient.post('/train/website', payload)
      console.log("Current Url is being trained by the model")  
    } catch (error) {
      console.error(error)
    }
  };

  const handleButtonClick = async () => {
    try {
      setIsFetching(true); // Set state to indicate API request start
      const payload = {
        query: inputText,
        chat_history:[],
        namespace: contactId,
        tenant_id: contactId
      }
      const response = await axiosClient.post('/query', payload)
      setOutputText(`${response.data}`); 
      setIsFetching(false)  
    } catch (error) {   
      console.error(error)  
      setIsFetching(false)
    }
  };



  return (
    <>
  <div className="bubble-container" onClick={toggleForm}>
    🫡
  </div>
  {isOpen && (
    <div className="form-container">
      <div>
        <input
          type="text"
          placeholder="Ask me"
          value={inputText}
          onChange={handleInputChange}
          className="input-field"
        />
        <textarea
          placeholder="Answer..."
          value={outputText}
          readOnly
          className={`textarea-field ${isFetching ? 'fetching' : ''}`}
        />
        <div className="button-group">
          <button onClick={handleButtonClick} className="button-field">
            Ask me
          </button>
          <button onClick={handleTrainButton} className="button-field-train">
            Train me
          </button>
        </div>
      </div>
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
