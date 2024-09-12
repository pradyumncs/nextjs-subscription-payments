import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ContextProvider from '@/sidebarmuslim/components/context-provider';

import '@/app/globals.css';

import SideNav from '@/sidebarmuslim/components/side-nav';

import Header from '../../sidebarmuslim/components/header';

const inter = Inter({ subsets: ['latin'] });



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (

   
        <ContextProvider>
          <Header />
          <div className="flex">
            <SideNav />
            <div className="w-full overflow-x-auto">
              <div className="sm:h-[calc(99vh-60px)] overflow-auto ">
                <div className="w-full flex justify-center mx-auto   overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                  <div className="w-full md:max-w-6xl">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </ContextProvider>
    
  );
}
