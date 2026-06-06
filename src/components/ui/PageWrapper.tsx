import type { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-stone-50 min-h-screen mx-auto px-6 py-8 max-w-7xl">
      {children}
    </div>
  );
}
