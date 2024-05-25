(function() {
  let isOpen = false; // Track whether the form is open or closed

  // Create the circle div element
  const div = document.createElement('div');
  div.id = 'my-extension-circle';
  div.style.cssText = `
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #0084ff; /* Messenger blue color */
    color: #fff; /* Text color */
    border-radius: 50%; /* Circle */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Drop shadow */
    z-index: 9999; /* Ensure the div stays on top */
    width: 60px; /* Adjust the size of the circle */
    height: 60px; /* Adjust the size of the circle */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif; /* Use a common font */
    cursor: pointer; /* Change cursor to pointer */
  `;
  div.textContent = '😊'; // Emoji for a smiley face

  // Append the circle div to the body
  document.body.appendChild(div);

  // Create the frame div element
  const frame = document.createElement('div');
  frame.id = 'my-extension-frame';
  frame.style.cssText = `
    position: fixed;
    top: 50%;
    left: 87%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 9999; /* Ensure the frame stays on top */
    width: 300px; /* Set frame width */
    max-width: 80%; /* Limit frame width */
    border-radius: 10px; /* Curvy edges */
    display: none; /* Initially hide the frame */
  `;

  // Create input field
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.placeholder = 'Enter your text';
  inputField.style.cssText = `
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px; /* Curvy edges */
    box-sizing: border-box;
    font-size: 16px;
  `;
  frame.appendChild(inputField);

  // Create output text area
  const outputTextArea = document.createElement('textarea');
  outputTextArea.placeholder = 'Output text';
  outputTextArea.style.cssText = `
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px; /* Curvy edges */
    resize: none;
    box-sizing: border-box;
    font-size: 16px;
  `;
  frame.appendChild(outputTextArea);

  // Create button
  const button = document.createElement('button');
  button.textContent = 'Ask';
  button.style.cssText = `
    padding: 10px 20px;
    cursor: pointer;
    background-color: #0084ff;
    color: #fff;
    border: none;
    border-radius: 5px; /* Curvy edges */
    font-size: 16px;
    transition: background-color 0.3s ease;
  `;
  button.addEventListener('click', function() {
    // Handle button click event
    // For example, you can process the input text and display output in the output text area
  });
  frame.appendChild(button);

  // Append the frame to the body
  document.body.appendChild(frame);

  // Function to toggle form visibility
  function toggleForm() {
    isOpen = !isOpen; // Toggle isOpen state
    frame.style.display = isOpen ? 'block' : 'none'; // Show/hide the frame
  }

  // Event listener for click on circle div
  div.addEventListener('click', toggleForm);
})();
