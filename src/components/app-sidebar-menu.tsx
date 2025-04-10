import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom"


const AppSidebarMenu = ({
  items,
}: Readonly<{
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean,
    isComponent?: boolean,
    component?: React.ReactNode
    items?: {
      title: string
      url: string
    }[]
  }[]
}>) => {
  const location = useLocation()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <>
            {
              item.isComponent ? item.component : <Link to={`/app${item.url}`} key={item.title}>
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton size={"default"} tooltip={item.title} isActive={`/app${item.url}` === location.pathname}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            }
          </>

        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default AppSidebarMenu