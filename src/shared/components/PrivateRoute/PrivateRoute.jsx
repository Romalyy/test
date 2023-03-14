import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../../hooks/use-auth';

const PrivateRoute = () => {
  const { isAuth } = useAuth();
  
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
