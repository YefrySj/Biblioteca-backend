export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    LIBROS: '/libros',
    AUTORES: '/autores',
    LIBROS_DISPONIBLES: '/libros/disponibles',
    LIBROS_NO_DISPONIBLES: '/libros/nodisponibles',
  },
  TIMEOUT: 5000,
} as const;

export const USE_MOCK_DATA = true; // Set to false when API is ready