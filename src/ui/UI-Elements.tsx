import { ButtonsProps } from "@/@types/Buttons";
import { ProgressBarProps } from "@/@types/ProgressBar";
import Link from "next/link";
import React from "react";

export function Button({
  gradient,
  textColor,
  children,
  className,
}: ButtonsProps) {
  return (
    <button className={`text-${textColor} ${gradient} rounded-lg ${className}`}>
      {children}
    </button>
  );
}

export function ProgressBar({ color, progress, text }: ProgressBarProps) {
  return (
    <div className="flex items-center w-full gap-3">
      <div className="text-[#7C7E8C]">{text}</div>
      <div
        className="h-2 rounded-full"
        style={{
          backgroundColor: color,
          width: `${progress}%`,
        }}
      ></div>
      <div className="text-[#7C7E8C]">{progress}%</div>
    </div>
  );
}

export function NavItems({
  children,
  className,
  href,
}: Readonly<{ children: React.ReactNode }> & {
  className?: string;
  href: string;
}) {
  return (
    <div
      className={`${className} border-gray-400 text-center p-4 text-lg font-semibold`}
    >
      <Link href={href} className="hover:border-b transition duration-300">
        {children}
      </Link>
    </div>
  );
}
