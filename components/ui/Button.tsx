import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "ghost";
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 font-display text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer inline-flex items-center justify-center font-bold rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]";
  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-primary text-white border-primary hover:bg-neutral-800 hover:border-neutral-800";
  } else if (variant === "accent") {
    variantStyles = "bg-secondary text-white border-secondary hover:bg-primary hover:border-primary";
  } else if (variant === "ghost") {
    variantStyles = "bg-transparent text-primary border-primary hover:bg-primary hover:text-white";
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
