(function() {
    // Create the div element
    const div = document.createElement('div');
    div.id = 'my-extension-div';
    div.style.cssText = `
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background-color: #fff;
      padding: 10px;
      border: 1px solid #ddd;
      z-index: 9999; /* Ensure the div stays on top */
    `;
    div.textContent = 'This is content from my extension!';
  
    // Append the div to the body
    document.body.appendChild(div);
  })();
  