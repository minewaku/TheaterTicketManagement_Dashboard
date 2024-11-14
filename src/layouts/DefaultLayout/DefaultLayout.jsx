import { Outlet } from 'react-router-dom';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';

const DefaultLayout = () => {
    return (
        <div className="flex h-screen w-screen flex-col overflow-hidden bg-layout_bg">
            <Header />
            {/* Adding 1px somehow make it works lol */}
            <div className="flex h-1 flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-scroll px-12 py-5">{<Outlet />}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
