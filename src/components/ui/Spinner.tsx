type SpinnerProps = { size?: "sm" | "md" | "lg"; className?: string };

export default function Spinner({ size, className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };
  return (
    <div
      role="status"
      className={`rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin ${sizeClasses[size ?? "sm"]} ${className}`}
    ></div>
  );
}
