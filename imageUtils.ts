import { Libro } from '../types';
import { bookImages, fallbackImage } from '../constants/images';

export function enrichLibroWithImage(libro: Libro): Libro {
  return {
    ...libro,
    imagen: bookImages[libro.titulo] || fallbackImage
  };
}