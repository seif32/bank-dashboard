import type React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export default function Button({
  variant,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClasses = {
    base: "px-4 py-2 rounded-md text-white font-medium transition-colors focus:outline-none focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    danger: "bg-red-700 hover:bg-red-800  focus:ring-red-500",
  };

  return (
    <button
      {...rest}
      className={`${variantClasses.base} ${variantClasses[variant ?? "primary"]} ${className}`}
    >
      {children}
    </button>
  );
}
