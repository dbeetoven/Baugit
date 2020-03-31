import React from 'react';
import Navbar from './NavBar';
import Sidebar from './Sidebar';

export const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="container-fluid">
          <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            {children}
            </div>
        </div>
      </div>
    </div>
  );
};
