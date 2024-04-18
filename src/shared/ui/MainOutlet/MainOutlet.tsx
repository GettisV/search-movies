import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';

export function MainOutlet() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
