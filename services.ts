import { Libro, Autor } from '../types';
import { API_CONFIG } from './config';
import { fetchFromAPI, APIError } from './apiClient';
import { mockLibros, mockAutores } from '../constants/mockData';
import { enrichLibroWithImage } from '../utils/imageUtils';

async function handleAPIRequest<T>(
  request: () => Promise<T>,
  mockData: T
): Promise<T> {
  try {
    return await request();
  } catch (error) {
    if (error instanceof APIError) {
      console.warn('Using mock data:', error.message);
      return mockData;
    }
    throw error;
  }
}

export async function getLibros(): Promise<Libro[]> {
  const libros = await handleAPIRequest(
    () => fetchFromAPI<Libro[]>(API_CONFIG.ENDPOINTS.LIBROS),
    mockLibros
  );
  return libros.map(enrichLibroWithImage);
}

export async function getAutores(): Promise<Autor[]> {
  return handleAPIRequest(
    () => fetchFromAPI<Autor[]>(API_CONFIG.ENDPOINTS.AUTORES),
    mockAutores
  );
}

export async function getLibrosDisponibles(): Promise<Libro[]> {
  const libros = await handleAPIRequest(
    () => fetchFromAPI<Libro[]>(API_CONFIG.ENDPOINTS.LIBROS_DISPONIBLES),
    mockLibros.filter(libro => libro.disponibilidad)
  );
  return libros.map(enrichLibroWithImage);
}

export async function getLibrosNoDisponibles(): Promise<Libro[]> {
  const libros = await handleAPIRequest(
    () => fetchFromAPI<Libro[]>(API_CONFIG.ENDPOINTS.LIBROS_NO_DISPONIBLES),
    mockLibros.filter(libro => !libro.disponibilidad)
  );
  return libros.map(enrichLibroWithImage);
}