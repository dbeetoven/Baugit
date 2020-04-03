import React from 'react';

export const Button = ({ content, type, buttonStyle, iconClass = null }) => {
  const _buttonWithIcon = () => {
    if (iconClass !== null) return <i className="icon" />;
  };

  return (
    <button type={type} className={buttonStyle}>
      {_buttonWithIcon()}
      {content}
    </button>
  );
};
