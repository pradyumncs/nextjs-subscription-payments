'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;


  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
     
        <nav className="ml-6 space-x-2 hidden lg:block">
  <Link href="/account" className={`${s.link} text-lg lg:text-xl`}>
    Account
  </Link>
</nav>

<nav className="ml-6 space-x-2 hidden lg:block">
  <Link href="/create" className={`${s.link} text-lg lg:text-xl`}>
    Create
  </Link>
</nav>


      
    
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
        <Link href="/pricing" className="inline-block">
        <Button
          className="bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full
                     py-3 px-4 text-lg
                     sm:py-4 sm:px-5 sm:text-xl
                     md:py-5 md:px-6 md:text-2xl"
        >
          Upgrade <Crown className="ml-2 h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
        </Button>
      </Link>
        ) : (
          <Link href="/signin" className={s.link}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
