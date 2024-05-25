const Bubble = () => {
  return (
    <div id="my-extension-div" style={{
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '10px',
      border: '1px solid #ddd',
      zIndex: 9999,
    }}>
      This is content from my extension!
    </div>
  );
};

export default Bubble;
