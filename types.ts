export interface Autor {
  nombre: string;
  nacionalidad: string;
  biografia?: string;
  foto?: string;
}

export interface Libro {
  titulo: string;
  autor: string;
  anioPublicacion: number;
  disponibilidad: boolean;
  imagen: string;
  descripcion?: string;
  genero?: string;
  idioma?: string;
  paginas?: number;
  isbn?: string;
  editorial?: string;
}

export interface Prestamo {
  libroId: string;
  fechaPrestamo: Date;
  fechaDevolucion: Date;
  usuario: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  prestamos: Prestamo[];
}