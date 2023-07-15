import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <div className="panel-bg">
    <NavBar />
    <div className="main">
      <Outlet />
    </div>

  </div>
);
export default Layout;
