import React from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "nav" | "icon" | "form";
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;

  bgColor?: string;
  iconBgColor?: string;
  iconColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  icon,
  className = "",
  onClick,
  href,
  bgColor,
  iconBgColor,
  iconColor,
  textColor,
}) => {
  const isLink = !!href;

  const classes = `button-default is-${variant} ${className}`;

  const styleVars = {
    "--btn-bg": bgColor,
    "--icon-bg": iconBgColor,
    "--icon-color": iconColor,
    "--text-color": textColor,
  } as React.CSSProperties;

  const Inner = () => (
    <div className="button-default__inner">
      <span className={`button-default__background is-${variant}`}></span>

      <span className="button-default__text" style={{ color: textColor }}>
        {children}
      </span>

      {icon && <div className="button-default__icon">{icon}</div>}
    </div>
  );

  if (isLink) {
    return (
      <a href={href} className={classes} onClick={onClick} style={styleVars}>
        <Inner />
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} style={styleVars}>
      <Inner />
    </button>
  );
};

export default Button;
