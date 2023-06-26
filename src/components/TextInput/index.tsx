"use client";

import Image from "next/image";
import React from "react";

export default function TextInput({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "flex h-full items-center gap-4 rounded-2xl border border-solid border-themeGrey100                       bg-themeGrey100 px-4 hover:border-blue-300 hover:bg-white" +
        " " +
        className
      }
    >
      {children && <div className="h-5 w-5">{children}</div>}
      <input
        type="text"
        placeholder="Search"
        className="flex h-full w-full border-none bg-transparent align-middle text-themeGrey500 outline-0"
      />
    </div>
  );
}
