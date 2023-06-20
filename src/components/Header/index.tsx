import React from "react";
import Image from "next/image";
import Button from "../Button";
import Colors from "../colors";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky flex h-12 w-full items-center justify-between gap-4 bg-white p-2">
      <Link href="/" className="h-[90%]">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </Link>
      <div
        className="flex h-full w-1/2 max-w-xl items-center rounded-full border border-solid border-themeGrey100 
                      bg-themeGrey100 px-4 hover:border-blue-300 hover:bg-white"
      >
        <input
          type="text"
          placeholder="Search"
          className="flex h-full text-themeGrey500 w-full border-none bg-transparent align-middle outline-0"
        />
      </div>
      <div className="flex gap-4">
        <Button>Get App</Button>
        <Button color={Colors.themeOrange} textColor="text-white">Log In</Button>
      </div>
    </header>
  );
}
