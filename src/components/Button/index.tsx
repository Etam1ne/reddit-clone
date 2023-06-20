"use client"
import React from "react";
import Colors from "../colors";

export default function Button({
  onClick,
  children,
  color,
  textColor,
}: {
  onClick: () => void;
  children: React.ReactNode;
  color?: Colors;
  textColor?: string | Colors;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-1 bg-${color ?? "themeGrey100"} ${textColor ?? "text-black"} flex items-center justify-center rounded-full
                        font-semibold after:absolute
                        after:h-full after:w-full after:rounded-full after:bg-black after:opacity-0 after:transition-all after:content-[''] hover:after:opacity-10`}
    >
      {children}
    </button>
  );
}