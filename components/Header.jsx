import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-24">
        <Link href="/">
          <h1 className='text-4xl font-semibold'><Image src="/portfolio-icon-vector-10.jpg" alt="logo" width={60} height={60}/></h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
        <Navbar />
        <Link href="/contact" className='ml-8'>
          <Button variant='ghost' className='text-lg'>Hire Me</Button>
        </Link>
        </div>

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  )
}

export default Header;