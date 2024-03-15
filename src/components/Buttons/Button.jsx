import React from 'react';
import './Button.css'; // Archivo de estilos personalizados (si es necesario)

const Button = () => {
  return (
    <div>
      <button className="btn">Normal</button>
      <button className="btn glass" style={{ backgroundColor: '#FF810E' }}>Glass button</button>
    </div>
  );
}
 
export default Button;