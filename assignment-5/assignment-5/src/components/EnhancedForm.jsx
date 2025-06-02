import React, { useState, useRef } from 'react';

const EnhancedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const nameInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form refresh
    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    nameInputRef.current.focus(); // focus on name input
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          ref={nameInputRef}
          value={formData.name}
          onChange={handleChange}
        />
      </label><br/><br/>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label><br/><br/>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </label><br/><br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnhancedForm;
