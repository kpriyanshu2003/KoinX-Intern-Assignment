import React from "react";

export function CardContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="p-4">{children}</div>;
}

export function CardTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h3 className="text-2xl font-medium">{children}</h3>;
}

export function CardContent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

export function CardSubHeading({
  children,
  icon,
}: Readonly<{ children: React.ReactNode; icon: string }>) {
  return (
    <h3 className="text-xl">
      <>{children}</>
      {icon && <> &emsp; {icon}</>}
    </h3>
  );
}
