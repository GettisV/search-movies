import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';

export default function MainOutlet() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
