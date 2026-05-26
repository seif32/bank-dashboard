import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className, children, ...rest }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${className}`} {...rest}>
      {children}
    </div>
  );
}
