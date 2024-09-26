'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isNotificationsActive, setIsNotificationsActive] = useState(false);
  const [isMessagesActive, setIsMessagesActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsExploreActive(false);
    setIsNotificationsActive(false);
    setIsMessagesActive(false);

    switch (pathname) {
      case '/':
        setIsHomeActive(true);
        break;
      case '/create':
        setIsExploreActive(true);
        break;
      case '/account':
        setIsNotificationsActive(true);
        break;
      case '/pricing':
        setIsMessagesActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
  };
};

export default useNavigation;
