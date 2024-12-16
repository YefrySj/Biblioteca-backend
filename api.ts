const API_URL = 'http://localhost:3000';

export const fetchLibros = async () => {
  const response = await fetch(`${API_URL}/libros`);
  return response.json();
};

export const fetchAutores = async () => {
  const response = await fetch(`${API_URL}/autores`);
  return response.json();
};

export const fetchLibrosDisponibles = async () => {
  const response = await fetch(`${API_URL}/libros/disponibles`);
  return response.json();
};

export const fetchLibrosNoDisponibles = async () => {
  const response = await fetch(`${API_URL}/libros/nodisponibles`);
  return response.json();
};