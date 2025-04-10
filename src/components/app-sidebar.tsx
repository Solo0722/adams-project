"use client"

import * as React from "react"
import {
  FolderGit,
  Home,
  MapPin,
  Settings,
  Video,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import AppSidebarHeader from "@/components/app-sidebar-header"
import AppSidebarMenu from "@/components/app-sidebar-menu"
import AppSidebarUser from "@/components/app-sidebar-user"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "",
      icon: Home,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderGit,
    },
    {
      title: "TMC Cameras",
      url: "/tmc-cameras",
      icon: Video,
    },
    {
      title: "Geolocation",
      url: "/geolocation",
      icon: MapPin,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <AppSidebarMenu items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"default"} tooltip={"Toogle Sidebar"}>
              <SidebarTrigger />
              <span>Collapse sidebar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
        <AppSidebarUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
