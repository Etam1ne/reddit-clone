'use client'
import Dialog from "@/components/Dialog";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <main>
      <div className="w-4 h-4 bg-black relative" onClick={() => setIsOpen(!isOpen)}>
        <Dialog isOpen={isOpen}>
          <p>12</p>
          <p>12</p>
          <p>12</p>
        </Dialog>
      </div>
    </main>
  );
}
