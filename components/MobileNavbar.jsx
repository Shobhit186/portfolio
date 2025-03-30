'use client';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"

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
const MobileNavbar = () => {
    const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center w-10 h-10">
        <CiMenuFries className="text-[32px] text-[var(--color-accent)] cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-[var(--color-background)] text-[var(--color-foreground)] flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Shobhit<span className="text-[var(--color-accent)]">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-4 text-center">{links.map((link,index) => {
            return <Link href={link.href} key={index} className={`text-xl font-medium text-yellow hover:text-[var(--color-accent)] transition-all duration-200 ${path === link.href ? 'text-[var(--color-accent)]' : ''}`}>
                {link.name}
            </Link>

        })}</nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar