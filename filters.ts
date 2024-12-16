import { Libro } from '../types';
import { FILTER_OPTIONS } from './constants';

export function filtrarLibros(libros: Libro[], filtro: string, busqueda: string) {
  return libros
    .filter(libro => {
      switch (filtro) {
        case FILTER_OPTIONS.AVAILABLE:
          return libro.disponibilidad;
        case FILTER_OPTIONS.UNAVAILABLE:
          return !libro.disponibilidad;
        default:
          return true;
      }
    })
    .filter(libro => {
      const searchTerm = busqueda.toLowerCase();
      return (
        libro.titulo.toLowerCase().includes(searchTerm) ||
        libro.autor.toLowerCase().includes(searchTerm)
      );
    });
}