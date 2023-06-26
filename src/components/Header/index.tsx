"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../TextInput";
import Dialog from "../Dialog";
import IconButton from "../IconButton";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export default function Header() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const ref = useRef(null);
  useOnClickOutside(
    ref,
    useCallback(() => {
      setNavToggle(false);
    }, [])
  );

  return (
    <header className="sticky z-50 flex h-12 w-full items-center gap-4 bg-white px-4 py-1">
      <Link href="/" className="h-5/6">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          priority={true}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </Link>

      <div
        className={`relative flex h-5/6 w-52 items-center justify-between border border-solid hover:border-themeGrey200
                ${
                  navToggle
                    ? "rounded-b-none border-themeGrey200"
                    : "border-white"
                } rounded-lg p-1`}
        onClick={() => setNavToggle(!navToggle)}
        ref={ref}
      >
        <Image
          src="/home.svg"
          width={100}
          height={100}
          priority={false}
          alt="Home"
          className="h-6 w-6"
        />
        <Image
          src="/bottom.svg"
          width={100}
          height={100}
          priority={false}
          alt="Dropdown"
          className="h-6 w-6"
        />
        <Dialog
          className="left-[-1px] w-52 rounded-b-lg border border-t-0 border-solid border-themeGrey200 p-2"
          isOpen={navToggle}
        >
          <p className="text-xs">Your communities:</p>
          <div className=""></div>
        </Dialog>
      </div>

      <TextInput className="flex-auto">
        <Image
          src="/search.svg"
          width={100}
          height={100}
          priority={true}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </TextInput>

      <IconButton>
        <Image
          src="/notification.svg"
          width={100}
          height={100}
          priority={true}
          alt="Logo"
          className="h-6 w-6"
        />
      </IconButton>
    </header>
  );
}
