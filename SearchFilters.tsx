import { Search, Filter } from 'lucide-react';
import { FILTER_OPTIONS } from '../utils/constants';

interface SearchFiltersProps {
  busqueda: string;
  setBusqueda: (value: string) => void;
  filtro: string;
  setFiltro: (value: string) => void;
}

export function SearchFilters({ busqueda, setBusqueda, filtro, setFiltro }: SearchFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por título o autor..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <select
            className="py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value={FILTER_OPTIONS.ALL}>Todos los libros</option>
            <option value={FILTER_OPTIONS.AVAILABLE}>Disponibles</option>
            <option value={FILTER_OPTIONS.UNAVAILABLE}>No disponibles</option>
          </select>
        </div>
      </div>
    </div>
  );
}