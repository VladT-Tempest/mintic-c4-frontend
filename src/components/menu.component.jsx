// vendors
import React from "react";
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Menu = () => {
  const token = sessionStorage.getItem('token');
  const user = jwt.decode(token)?.user;

  const handleCloseSession = () => {
    sessionStorage.removeItem('token');
    window.location.href='/';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">{'Inicio'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">{'Proyectos'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">{'Usuarios'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registros">{'Registros'}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leader">{'Líder'}</Link>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end collapse navbar-collapse">
            {token ? <>Hola, {user.fullName}
            <li className="nav-item">
              <Link className="nav-link" to="/users/updateUser">{'Mi perfil'}</Link>
            </li>
            <a href="#" onClick={handleCloseSession} className="nav-link">Cerrar sesión</a>           
            </> : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/login">{'Ingresa'}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/signup">{'Regístrate'}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;