import React, { useEffect, useState } from 'react';
import { fetchEntidades, fetchTiposEntidad, createEntidad } from '../services/apiClient';

const EntidadesPage = () => {
  const [entities, setEntities] = useState([]); // Lista de entidades
  const [entityTypes, setEntityTypes] = useState([]); // Lista de tipos de entidad
  const [newEntity, setNewEntity] = useState({
    name: '',
    entity_type: '',
    contact_info: '',
  }); // Estado para datos del formulario

  // Fetch inicial para cargar entidades y tipos
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const tipos = await fetchTiposEntidad();
    const entidades = await fetchEntidades();
    setEntityTypes(tipos.data);
    setEntities(entidades.data);
  };

  // Manejador para cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntity({ ...newEntity, [name]: value });
  };

  // Manejador para envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    try {
      await createEntidad(newEntity); // Crea la nueva entidad en el backend
      setNewEntity({ name: '', entity_type: '', contact_info: '' }); // Resetea el formulario
      loadData(); // Recarga la lista de entidades
    } catch (error) {
      console.error('Error al crear la entidad:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Gestión de Entidades</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newEntity.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de Entidad</label>
          <select
            className="form-select"
            name="entity_type"
            value={newEntity.entity_type}
            onChange={handleInputChange}
          >
            <option value="">Seleccionar</option>
            {entityTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Información de Contacto</label>
          <textarea
            className="form-control"
            name="contact_info"
            value={newEntity.contact_info}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Entidad
        </button>
      </form>
      <h2>Lista de Entidades</h2>
      <ul className="list-group">
        {entities.map((entity) => (
          <li key={entity.id} className="list-group-item">
            {entity.name} ({entity.entity_type_name})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntidadesPage;
