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
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <SideNav />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
              <div className="w-full">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </ContextProvider>
  );
}