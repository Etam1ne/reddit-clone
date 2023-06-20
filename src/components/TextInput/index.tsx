'use client'

import Image from 'next/image';
import React from 'react'

export default function TextInput({
    children,
}: {
    children?: React.ReactNode;
}) {
  return (
    <div
        className="flex gap-4 h-full w-1/2 max-w-xl items-center rounded-2xl border border-solid border-themeGrey100 
                      bg-themeGrey100 px-4 hover:border-blue-300 hover:bg-white"
      >
        <div className="h-5 w-5">
            {children}
        </div>
        <input
          type="text"
          placeholder="Search"
          className="flex h-full text-themeGrey500 w-full border-none bg-transparent align-middle outline-0"
        />
      </div>
  )
}
