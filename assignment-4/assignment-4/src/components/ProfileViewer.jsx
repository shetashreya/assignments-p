import React, { useState } from 'react';

const ProfileViewer = ({ name, email, isPremiumUser }) => {
  const [show, setShow] = useState(true);

  return (
    <div style={{ padding: '1rem', margin: '1rem 0', border: '1px solid #ddd', borderRadius: '8px' }}>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Profile' : 'Show Profile'}
      </button>
      {show && (
        <>
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{isPremiumUser ? '🌟 Premium Member' : '🔒 Upgrade to Premium'}</p>
        </>
      )}
    </div>
  );
};

export default ProfileViewer;
