'use client'

import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Colors from "../../colors";
import Link from "next/link";
import TextInput from "../TextInput";
import Dialog from "../Dialog";
import IconButton from "../IconButton";

export default function Header() {
  const [navToggle, setNavToggle] = useState<boolean>(false)

  return (
    <header className="sticky flex h-12 w-full items-center gap-4 bg-white px-4 py-1 z-50">
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
      className={`flex relative items-center justify-between w-40 h-5/6 border border-solid hover:border-themeGrey200
                ${navToggle ? "rounded-b-none border-themeGrey200" : "border-white"} rounded-lg p-1`} 
      onClick={() => setNavToggle(!navToggle)}>
        <div className="h-6 w-6">
          <Image
            src="/home.svg"
            width={100}
            height={100}
            priority={false}
            alt="Home"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-6 w-6">
          <Image
            src="/bottom.svg"
            width={100}
            height={100}
            priority={false}
            alt="Dropdown"
            className="h-full w-full object-cover"
          />
        </div>
        <Dialog isOpen={navToggle} className="w-40 border-themeGrey200 border border-solid border-t-0 left-[-1px]">
          <p>1</p>
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
          className="h-full w-full object-cover"
        />
      </IconButton>
    </header>
  );
}
