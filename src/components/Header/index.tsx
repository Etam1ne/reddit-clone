import React from 'react';
import Image from 'next/image';
import Logo from "@/../public/logo.png";

export default function Header() {
  return (
    <header className='h-14 bg-white sticky flex items-center gap-4 w-full p-2'>
        <div className='h-[90%]'>
          <Image 
            src={Logo} 
            alt="Logo"
            className='object-cover w-full h-full'
          />
        </div>
        <div className='bg-green-500'>q</div>
        <div className='flex-1'>
          <input type='text' className='w-full h-full'/>
        </div>
        <div className='bg-red-200'>q</div>
        <div className='bg-red-500'>q</div>
    </header>
  )
}
