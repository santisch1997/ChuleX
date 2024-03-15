import React from 'react';
import './Switch.css';

const Switch = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="switch-container">
      <label>
        <input
          type="radio"
          value="UX/UI"
          checked={value === 'UX/UI'}
          onChange={handleChange}
        />
        UX/UI
      </label>
      <label>
        <input
          type="radio"
          value="Front End Dev"
          checked={value === 'Front End Dev'}
          onChange={handleChange}
        />
        Front End Dev
      </label>
    </div>
  );
};

export default Switch;