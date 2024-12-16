import { useState, useEffect } from 'react';
import { Libro } from '../types';
import { getLibros } from '../api/services';

export function useLibros() {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchLibros = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getLibros();
        if (mounted) {
          setLibros(data);
        }
      } catch (e) {
        if (mounted) {
          setError('Error al cargar los libros');
          console.error(e);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchLibros();

    return () => {
      mounted = false;
    };
  }, []);

  return { libros, isLoading, error };
}