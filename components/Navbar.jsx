'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Resume",
        href: "/resume",
    },
    {
        name: "Work",
        href: "/work",
    },
    {
        name: "Contact",
        href: "/contact",
    }
]

const Navbar = () => {
  return (
    <nav className='flex gap-8'>
        {links.map((link,index) => {
            return <Link href={link.href} key={index} className={`text-lg font-medium text-yellow hover:text-[var(--color-accent)] transition-all duration-200 ${usePathname() === link.href ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : ''}`}>
                {link.name}
            </Link>
        })}
    </nav>
  )
}

export default Navbar