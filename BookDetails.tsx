import { Libro } from '../types';
import { Calendar, Book, Globe, Building, Hash } from 'lucide-react';

interface BookDetailsProps {
  libro: Libro;
  onClose: () => void;
}

export function BookDetails({ libro, onClose }: BookDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={libro.imagen}
                alt={libro.titulo}
                className="w-full md:w-1/3 rounded-lg object-cover"
              />
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{libro.titulo}</h2>
                <p className="text-gray-600 mb-4">Por {libro.autor}</p>
                
                {libro.descripcion && (
                  <p className="text-gray-700 mb-4">{libro.descripcion}</p>
                )}
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span>Año: {libro.anioPublicacion}</span>
                  </div>
                  
                  {libro.genero && (
                    <div className="flex items-center gap-2">
                      <Book className="w-5 h-5 text-gray-400" />
                      <span>Género: {libro.genero}</span>
                    </div>
                  )}
                  
                  {libro.idioma && (
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-gray-400" />
                      <span>Idioma: {libro.idioma}</span>
                    </div>
                  )}
                  
                  {libro.editorial && (
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-gray-400" />
                      <span>Editorial: {libro.editorial}</span>
                    </div>
                  )}
                  
                  {libro.isbn && (
                    <div className="flex items-center gap-2">
                      <Hash className="w-5 h-5 text-gray-400" />
                      <span>ISBN: {libro.isbn}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      libro.disponibilidad
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!libro.disponibilidad}
                  >
                    {libro.disponibilidad ? 'Solicitar Préstamo' : 'No Disponible'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}