import React from "react";

export function PageContainer({
  children,
  className,
}: Readonly<{ children: React.ReactNode }> & { className?: string }) {
  return (
    <div
      className={`${className} bg-white p-4 rounded-lg my-6 border border-slate-300 md:border-none`}
    >
      {children}
    </div>
  );
}
