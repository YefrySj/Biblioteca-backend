import { useState } from 'react';
import { BookCard } from './components/BookCard';
import { Header } from './components/Header';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { SearchFilters } from './components/SearchFilters';
import { AuthorsList } from './components/AuthorsList';
import { Tabs } from './components/Tabs';
import { useLibros } from './hooks/useLibros';
import { useAutores } from './hooks/useAutores';
import { filtrarLibros } from './utils/filters';

function App() {
  const { libros, isLoading: librosLoading, error: librosError } = useLibros();
  const { autores, isLoading: autoresLoading, error: autoresError } = useAutores();
  const [activeTab, setActiveTab] = useState('libros');
  const [filtro, setFiltro] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');

  const librosFiltrados = filtrarLibros(libros, filtro, busqueda);
  const isLoading = librosLoading || autoresLoading;
  const error = librosError || autoresError;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'libros' && (
          <SearchFilters
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            filtro={filtro}
            setFiltro={setFiltro}
          />
        )}

        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        
        {!isLoading && !error && (
          <>
            {activeTab === 'libros' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {librosFiltrados.map((libro) => (
                    <BookCard key={libro.titulo} libro={libro} />
                  ))}
                </div>

                {librosFiltrados.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      No se encontraron libros que coincidan con tu búsqueda.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <AuthorsList autores={autores} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;