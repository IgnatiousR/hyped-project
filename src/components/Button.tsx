import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'nav' | 'icon';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  icon, 
  className = '', 
  onClick,
  href
}) => {
  const isLink = !!href;
  const classes = `button-default is-${variant} ${className}`;

  const Inner = () => (
    <div className="button-default__inner">
      <span className={`button-default__background is-${variant}`}></span>
      <span className="button-default__text">{children}</span>
      {icon && <div className="button-default__icon">{icon}</div>}
    </div>
  );

  if (isLink) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        <Inner />
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <Inner />
    </button>
  );
};

export default Button;
