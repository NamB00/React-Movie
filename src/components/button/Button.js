import React from 'react';

const Button = ({onClick, className, type = "button", children}) => {
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${className}`}>{children}
    </button>
  );
};

export default Button;