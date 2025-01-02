import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const HealthCheckPage = React.lazy(() => import('./pages/HealthCheckPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const OrganizarCostesPage = React.lazy(() => import('./pages/OrganizarCostesPage'));
const EntidadesPage = React.lazy(() => import('./pages/EntidadesPage'));
const VerClientesPage = React.lazy(() => import('./pages/VerClientesPage'));  

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/entidades/gestionar" element={<EntidadesPage />} />
          <Route path="/entidades/clientes" element={<VerClientesPage />} />
          <Route path="/costes/organizar" element={<OrganizarCostesPage />} />
          <Route path="/configuracion/estado" element={<HealthCheckPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
