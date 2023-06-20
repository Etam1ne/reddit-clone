'use client'

import React from "react";
import Image from "next/image";
import Button from "../Button";
import Colors from "../colors";
import Link from "next/link";
import TextInput from "../TextInput";

export default function Header() {
  return (
    <header className="sticky flex h-12 w-full items-center justify-between gap-4 bg-white p-2">
      <Link href="/" className="h-[90%]">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          priority={true}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </Link>
      
      <TextInput>
        <Image
          src="/search.svg"
          width={100}
          height={100}
          priority={true}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </TextInput>

      <div className="flex gap-4">
        <Button onClick={() => console.log('pressed')}>Get App</Button>
        <Button onClick={() => console.log('pressed')}color={Colors.themeOrange} textColor="text-white">Log In</Button>
      </div>
    </header>
  );
}
