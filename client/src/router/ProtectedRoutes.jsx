import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';

const ProtectedRoutes = () => {

    const token = localStorage.getItem("access");

    if (token) {
        return (
            <div>
                <Outlet />
                <NavBar />
            </div>
        )

    } else {
        return <Navigate to='/login' />
    }
};

export default ProtectedRoutes;