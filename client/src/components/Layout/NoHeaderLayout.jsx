import React from 'react';
import { Outlet } from 'react-router-dom';

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
