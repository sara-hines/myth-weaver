import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <Header />
      <main>
        <Outlet />
      </main>
        <Footer />
    </div>
  );
};

export default Layout;
