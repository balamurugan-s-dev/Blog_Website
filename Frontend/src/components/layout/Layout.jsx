import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className='sticky top-0 left-0 bg-white'><Navbar/></div>
      <Outlet />
    </div>
  );
};

export default Layout;