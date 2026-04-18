import React from "react";
import "./Icon.css";

export interface IconProps {
  iconName: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  iconName,
  size = 24,
  color,
  className = "",
  style = {},
  onClick,
}) => {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      fill={color || "currentColor"}
      style={style}
      onClick={onClick}
      aria-hidden="true"
    >
      <use href={`/icons.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
