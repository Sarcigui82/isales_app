import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        {children || <Outlet />}
      </main>
      <footer style={{ padding: '10px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
        <p>© 2025 iSales_App</p>
      </footer>
    </div>
  );
};

export default Layout;
