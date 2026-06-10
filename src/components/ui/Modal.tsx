import type { ReactNode } from "react";
import Card from "./Card";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  title?: string;
  className?: string;
  onClose: () => void;
};

export default function Modal({
  className,
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="bg-black/50 grid place-items-center inset-0 fixed z-50"
      onClick={onClose}
    >
      <Card
        className={`relative ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={onClose}
        >
          x
        </button>
        <p className="font-semibold text-center text-xl mb-3">{title}</p>
        {children}
      </Card>
    </div>
  );
}
