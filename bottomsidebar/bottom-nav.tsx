'use client';

import React from 'react';

import Link from 'next/link';

import useNavigation from '@/hooks/use-navigation';
import useScrollingEffect from '@/hooks/use-scroll';
import { Icon } from '@iconify/react';


const BottomNav = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';

  const {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
  } = useNavigation();

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center relative">
          {isHomeActive ? (
            <Icon icon="mingcute:home-5-fill" width="34" height="34" />
          ) : (
            <Icon icon="mingcute:home-5-line" width="34" height="34" />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href="/create" className="flex items-center">
          {isExploreActive ? (
            <Icon
              icon="ph:plus-fill"
              width="34"
              height="34"
              className="stroke-current stroke-5"
            />
          ) : (
            <Icon icon="ph:plus-bold" width="34" height="34" />
          )}
        </Link>
        <Link href="/account" className="flex items-center">
          {isNotificationsActive ? (
            <Icon icon="mdi:account" width="34" height="34" />
          ) : (
            <Icon icon="mdi:account-outline" width="34" height="34" />
          )}
        </Link>
        <Link href="/pricing" className="flex items-center">
          {isMessagesActive ? (
            <Icon icon="majesticons:crown" width="34" height="34" />
          ) : (
            <Icon icon="majesticons:crown-line" width="34" height="34" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
