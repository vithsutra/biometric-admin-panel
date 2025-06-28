"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { PathFinder } from "./PathFinder";
import { Toaster } from "sonner";


export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/login" ) {
    return <>{children}</>; 
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="w-full">
          <PathFinder />
          <main className="p-4">{children}</main>
          <Toaster />
        </div>
      </div>                                                                                                                  
    </SidebarProvider>
  );
}
