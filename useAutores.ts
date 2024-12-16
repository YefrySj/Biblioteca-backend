import { useState, useEffect } from 'react';
import { Autor } from '../types';
import { getAutores } from '../api/services';

export function useAutores() {
  const [autores, setAutores] = useState<Autor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchAutores = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getAutores();
        if (mounted) {
          setAutores(data);
        }
      } catch (e) {
        if (mounted) {
          setError('Error al cargar los autores');
          console.error(e);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    fetchAutores();

    return () => {
      mounted = false;
    };
  }, []);

  return { autores, isLoading, error };
}