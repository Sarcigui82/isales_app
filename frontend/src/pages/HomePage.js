import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gestión de Costos</h5>
              <p className="card-text">
                Administra todos los costos de fletes, trámites y más.
              </p>
              <a href="#" className="btn btn-primary">
                Ver detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Análisis de Correos</h5>
              <p className="card-text">
                Automatiza el análisis de solicitudes desde el correo.
              </p>
              <a href="#" className="btn btn-primary">
                Ver detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
