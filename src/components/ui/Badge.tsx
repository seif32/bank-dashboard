import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant: "success" | "warning" | "danger" | "info";
};

export default function Badge({ variant, className, ...rest }: BadgeProps) {
  const variantClasses = {
    base: "bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-semibold",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };
  return (
    <div
      className={`${variantClasses.base} ${variantClasses[variant]} ${className}`}
      {...rest}
    ></div>
  );
}
