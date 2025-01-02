import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Estilo personalizado

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          iSales_App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="costesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 Entidades
              </Link>
              <ul className="dropdown-menu" aria-labelledby="entidadesDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/entidades/gestionar">
                    Gestión de Entidades
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/entidades/clientes">
                    Ver Clientes
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="solicitudesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Costes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="costesDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/costes/organizar">
                    Organización de Costes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/costes/tendencias">
                    Análisis de Tendencias
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="solicitudesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solicitudes
              </Link>
              <ul className="dropdown-menu" aria-labelledby="solicitudesDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/solicitudes/procesar">
                    Procesar Solicitudes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/solicitudes/historial">
                    Historial de Análisis
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="ofertasDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ofertas
              </Link>
              <ul className="dropdown-menu" aria-labelledby="ofertasDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/ofertas/crear">
                    Crear Ofertas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ofertas/politicas">
                    Políticas Comerciales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ofertas/enviar">
                    Enviar Ofertas
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="configuracionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Configuración
              </Link>
              <ul className="dropdown-menu" aria-labelledby="configuracionDropdown">
              <li>
                  <NavLink className="dropdown-item" to="/configuracion/estado">
                    Estado del Sistema
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/configuracion/roles">
                    Roles y Accesos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/configuracion/preferencias">
                    Preferencias
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;