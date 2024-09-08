import React from 'react';
import Link from "next/link";
import { PanelsTopLeft, Menu as MenuIcon, ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/dashboard/components/ui/button";
import { Menu } from "@/dashboard/components/admin-panel/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export function Sidebar() {
  const isOpen = useSidebarToggle((state) => state.isOpen);
  const setIsOpen = useSidebarToggle((state) => state.setIsOpen);
  
  return (
    <>
      <Button
        onClick={setIsOpen}
        className="fixed top-4 left-4 z-30 lg:hidden"
        size="icon"
        variant="outline"
      >
       
      </Button>
      <aside
        className={cn(
          "fixed top-0 left-0 z-20 h-screen transition-all ease-in-out duration-300 bg-black text-white",
          isOpen ? "w-72" : "w-0 lg:w-[90px]",
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0", // Hide completely on mobile when closed
          "lg:overflow-visible overflow-hidden" // Ensure no overflow issues on mobile
        )}
      >
        <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md">
          <Button
            onClick={setIsOpen}
            className={cn(
              "transition-all ease-in-out duration-300 mb-1 text-white hover:text-white",
              isOpen ? "w-full justify-start" : "w-[60px] justify-center"
            )}
            variant="ghost"
          >
            <ChevronLeft className="w-6 h-6" />
            <span
              className={cn(
                "ml-2 font-bold text-lg whitespace-nowrap transition-all ease-in-out duration-300",
                isOpen ? "opacity-100 inline" : "opacity-0 hidden lg:inline lg:opacity-0"
              )}
            >
              Menu
            </span>
          </Button>
          <Menu isOpen={isOpen} />
        </div>
      </aside>
    </>
  );
}