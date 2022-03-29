// import necessary utility from rrd
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const isLogin = false;

  return isLogin ? <Outlet /> : <Navigate to="/signin" />;
}
