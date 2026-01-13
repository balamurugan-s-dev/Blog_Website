import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo';

const AuthLayout = () => {
  return (
    <div className="min-h-screen px-4 py-4 md:px-8 md:py-8 lg:px-16 flex flex-col gap-8">
        <Logo />
        <Outlet/>
    </div>
  );
};

export default AuthLayout;