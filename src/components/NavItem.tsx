import React from 'react';
import './NavItem.css';

interface NavItemProps {
  label: string;
  href: string;
  className?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, className = "is-menu", onClick }) => {
  return (
    <a href={href} className={`button-color-swoosh ${className}`} aria-label={`${label} link`} onClick={onClick}>
      <span className="button-color-swoosh_bg">
        <span style={{ '--index': 0 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-first"></span>
        <span style={{ '--index': 1 } as React.CSSProperties} className="button-color-swoosh_bg-inner is-second"></span>
      </span>
      <span data-text={label} className="button-color-swoosh_inner">
        <span className="button-color-swoosh_text">{label}</span>
      </span>
    </a>
  );
};

export default NavItem;
