import React from 'react';
import { SideNav } from './SideNav';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <SideNav />
      <main className="main-content">
        {children}
      </main>
      <style jsx>{`
        .layout {
          display: flex;
        }
        .main-content {
          margin-left: 250px; /* Same width as the sidenav */
          padding: 20px;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;