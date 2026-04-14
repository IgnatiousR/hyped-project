import React from 'react';
import './NavItem.css';

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <a href={href} className="button-color-swoosh is-menu" aria-label={`${label} link`}>
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
