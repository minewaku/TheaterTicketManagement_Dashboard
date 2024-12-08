import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

const UnauthenicatedRoute = () => {
    const auth = useSelector((state) => state.auth);
    return auth.isAuthenicated ? <Navigate to="/" replace /> : <Outlet />;
};

export default UnauthenicatedRoute;
