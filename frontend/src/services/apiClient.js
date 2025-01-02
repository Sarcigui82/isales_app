import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient; // Exportación por defecto

// Exportaciones individuales para funciones específicas
export const fetchEntidades = () => apiClient.get('/entidades/entidades/');
export const fetchTiposEntidad = () => apiClient.get('/entidades/tipos/');
export const createEntidad = (data) => apiClient.post('/entidades/entidades/', data);
export const updateEntidad = (id, data) => apiClient.put(`/entidades/entidades/${id}/`, data);
export const deleteEntidad = (id) => apiClient.delete(`/entidades/entidades/${id}/`);
