import React from "react";
import Icon from "./Icon";

type SpriteIconProps = Omit<React.ComponentProps<typeof Icon>, "iconName">;
/* Logo Component */
export const Logo: React.FC<
  Omit<React.SVGProps<SVGSVGElement>, "iconName" | "name">
> = (props) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 8L28 20L12 32V8Z" fill="currentColor" />
    <circle cx="32" cy="20" r="4" fill="currentColor" />
  </svg>
);

// Arrow Icon Component
export const ArrowIcon: React.FC<
  Omit<React.SVGProps<SVGSVGElement>, "iconName" | "name">
> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Flame Icon Component
export const FlameIcon: React.FC<
  Omit<React.SVGProps<SVGSVGElement>, "iconName" | "name">
> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C12 2 8 8 8 12C8 15.3137 10.6863 18 14 18C17.3137 18 20 15.3137 20 12C20 8 16 2 12 2Z"
      fill="currentColor"
    />
    <path
      d="M12 6C12 6 10 9 10 12C10 14.2091 11.7909 16 14 16C16.2091 16 18 14.2091 18 12C18 9 16 6 12 6Z"
      fill="rgba(255, 100, 0, 0.5)"
    />
  </svg>
);

// Existing Icons from sprite
export const BlueskyIcon: React.FC<SpriteIconProps> = (props) => (
  <Icon iconName="bluesky-icon" {...props} />
);

export const DiscordIcon: React.FC<SpriteIconProps> = (props) => (
  <Icon iconName="discord-icon" {...props} />
);

export const DocumentationIcon: React.FC<SpriteIconProps> = (props) => (
  <Icon iconName="documentation-icon" {...props} />
);

export const GithubIcon: React.FC<SpriteIconProps> = (props) => (
  <Icon iconName="github-icon" {...props} />
);

export const SocialIcon: React.FC<SpriteIconProps> = (props) => (
  <Icon iconName="social-icon" {...props} />
);

export const XIcon: React.FC<SpriteIconProps> = (props) => (
  <Icon iconName="x-icon" {...props} />
);
export { Icon };
export type { IconProps } from "./Icon";
