import React from 'react';

const Message = ({ message }) => {
  return (
    <div id="message" style={{ display: message ? 'block' : 'none' }}>
      {message}
    </div>
  );
};

export default Message;
