import React, { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';

const HealthCheckPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    apiClient.get('/health-check/')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error al conectar con el backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>Prueba de Conexión</h1>
      <p>{message || 'Conectando...'}</p>
    </div>
  );
};

export default HealthCheckPage;
