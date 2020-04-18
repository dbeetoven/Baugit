import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './NavBar';
import Sidebar from './Sidebar';

export const Layoutk = ({ children, user, logout }) => (
  <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Navbar user={user} logout={logout} />
        <div className="container-fluid">
          {/* <h1 className="h3 mb-0 text-gray-800">Dashboard</h1> */}
          {children}
        </div>
      </div>
    </div>
  </div>
);

Layoutk.propTypes = {
  children: PropTypes.any.isRequired,
};
