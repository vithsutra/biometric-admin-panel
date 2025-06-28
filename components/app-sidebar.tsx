import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { comfortaa, inter, poppins } from "@/app/fonts"


const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Biometric Dashboard",
      items: [
        {
          title: "Home",
          url: "/dashboard/1",
        },
        {
          title: "User",
          url: "/useraccess",
        },
      ],
    } 
  ],
}

export  function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const adminId = await params
  // ,{params}:{params:{adminId:string}}

  return (
    <Sidebar {...props} className="flex ">
      <SidebarHeader className="flex pl-4 mt-5">
      <h1 className={` ${inter.className} font-bold text-4xl text-[#4169E1]`}>Vithsutra</h1>
      </SidebarHeader>
      <SidebarContent className={`${inter.className}`} >
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} >
            <SidebarGroupLabel className="text-md font-comfortaa">{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="mt-7 gap-y-3">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild >
                      <a href={item.url} className="text-xl tracking-[1.3] ">{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
