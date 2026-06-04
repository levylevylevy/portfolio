import React from "react";

/**
 * Modern shadcn-style card button.
 * variant: "primary" (filled dark) | "outline" (border only) | "ghost" (subtle)
 */
const CardButton = ({ children, onClick, href, target, rel, variant = "outline", style = {} }) => {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 36,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "Poppins-Regular, sans-serif",
    letterSpacing: "0.01em",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background 0.15s, box-shadow 0.15s, opacity 0.15s",
    border: "none",
    ...style,
  };

  const variants = {
    primary: {
      background: "#1C1917",
      color: "#FAF8F5",
      boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
    },
    outline: {
      background: "transparent",
      color: "#1C1917",
      border: "1px solid rgba(28,25,23,0.25)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
    },
    ghost: {
      background: "rgba(28,25,23,0.06)",
      color: "#1C1917",
    },
  };

  const finalStyle = { ...base, ...variants[variant] };

  const hoverStyle = {
    primary: { background: "#2e2926" },
    outline: { background: "rgba(28,25,23,0.05)" },
    ghost: { background: "rgba(28,25,23,0.11)" },
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, hoverStyle[variant]);
  };
  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, variants[variant]);
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={finalStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={finalStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default CardButton;
