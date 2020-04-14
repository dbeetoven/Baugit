import React from 'react';
import { useUser } from 'reactfire';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const user = useUser();

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        type="button"
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars" />
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.email}</span>
            <img
              alt="Avatar-profile"
              className="img-profile rounded-circle"
              src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
            />
          </Link>

          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="/user-profile">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
              Perfil
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
              Parametros
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
              Actividades
            </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
              Cerrar Sesion
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
