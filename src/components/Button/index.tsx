"use client";
import React from "react";
import Colors from "../../colors";

export default function Button({
  onClick,
  children,
  color,
  textColor,
  borderColor,
}: {
  onClick: () => void;
  children: React.ReactNode;
  color?: string | Colors;
  textColor?: string | Colors;
  borderColor?: string | Colors;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-1 bg-${color ?? "themeGrey100"} ${
        textColor ?? "text-black"
      } border border-solid border-${borderColor ?? "themeGrey200"} 
                        flex items-center justify-center gap-2 rounded-full font-semibold after:absolute
                        after:h-full after:w-full after:rounded-full after:bg-black after:opacity-0 after:transition-all after:content-[''] hover:after:opacity-10`}
    >
      {children}
    </button>
  );
}
