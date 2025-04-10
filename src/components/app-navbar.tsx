"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BadgeCheck, Bell, CreditCard, LogOut, Search, Sparkles } from 'lucide-react'
import { InputWithIcon } from '@/components/ui/input-with-icon'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

const AppNavbar = () => {

    return (
        <nav className='flex h-[64px] z-50 sticky top-0 items-center justify-between gap-4 px-4 bg-white '>
            <div className='block md:hidden'>
                <Logo />
            </div>
            <div className='hidden md:block w-2/6'>
                <InputWithIcon placeholder='Search by job title, description and more' containerClassName='w-full' className=' h-8 border-slate-100' icon={<Search className='h-4 w-4' />} />
            </div>
            <div className='flex flex-row gap-2'>
                <Button className='h-8 flex items-center justify-center text-[12px] font-bold  md:hidden' variant={"secondary"}>
                    <Search className='w-4 h-4' />
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div
                            className="flex flex-row  gap-2 items-center cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={"https://github.com/shadcn.png"} alt={"Anonymous User"} />
                                <AvatarFallback className="rounded-lg">{"A"}</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={"bottom"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={"https://github.com/shadcn.png"} alt={"Anonymous User"} />
                                    <AvatarFallback className="rounded-lg">{"A"}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{"Anonymous User"}</span>
                                    <span className="truncate text-xs">{"test@twitch.com"}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Sparkles />
                                Upgrade to Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}

export default AppNavbar