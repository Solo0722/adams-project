import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { Outlet } from 'react-router-dom';
import AppNavbar from '@/components/app-navbar';

const AppLayout = () => {

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className='w-full min-h-screen bg-gray-50'>
                    <AppNavbar />
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default AppLayout;
