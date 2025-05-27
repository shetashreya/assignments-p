import React from 'react';

const UserBadge = ({ name, role, isVerified }) => {
  const badgeStyle = {
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '8px',
    backgroundColor: isVerified ? '#d4edda' : '#f8d7da',
    color: isVerified ? '#155724' : '#721c24',
    border: `1px solid ${isVerified ? '#c3e6cb' : '#f5c6cb'}`,
  };

  return (
    <div style={badgeStyle}>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{isVerified ? '✅ Verified' : '❌ Not Verified'}</p>
    </div>
  );
};

export default UserBadge;
