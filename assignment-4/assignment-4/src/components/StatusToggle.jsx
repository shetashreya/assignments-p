import React, { useState } from 'react';

const StatusToggle = () => {
  const [status, setStatus] = useState('Online');

  const toggleStatus = () => {
    setStatus((prev) => (prev === 'Online' ? 'Offline' : 'Online'));
  };

  const style = {
    backgroundColor: status === 'Online' ? '#d4edda' : '#f8d7da',
    color: status === 'Online' ? '#155724' : '#721c24',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <p>Status: {status === 'Online' ? '🟢 Online' : '🔴 Offline'}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
};

export default StatusToggle;
