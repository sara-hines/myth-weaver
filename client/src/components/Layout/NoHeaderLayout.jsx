import React from 'react';
import { Outlet } from 'react-router-dom';

// A layout with no header, created for the landing page
const NoHeaderLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NoHeaderLayout;