import { usePathname } from 'next/navigation';

import { Bell, Briefcase, Home, Settings, User,Gem , Play  } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Create',
      href: '/create',
      icon: <Play size={20} />,
      active: isNavItemActive(pathname, '/create'),
      position: 'top',
    },
    
    {
      name: 'Pricing',
      href: '/pricing',
      icon: <Gem size={20} />,
      active: isNavItemActive(pathname, '/pricing'),
      position: 'top',
    },
    
    {
      name: 'Account',
      href: '/account',
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, '/account'),
      position: 'top',
    },
  ];
};
