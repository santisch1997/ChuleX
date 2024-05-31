import React from 'react';
import './Switch.css';

const Switch = ({ value, onChange }) => {
  const handleChange = (e) => {
    console.log('Switch clicked:', e.target.value); // Verifica que esto se imprima en la consola
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
      <label>
        <input
          type="radio"
          value="No-Code"
          checked={value === 'No-Code'}
          onChange={handleChange}
        />
        No-Code
      </label>
    </div>
  );
};

export default Switch;
