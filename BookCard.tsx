import { useState } from 'react';
import { Libro } from '../types';
import { BookOpen, Info } from 'lucide-react';
import { BookDetails } from './BookDetails';

interface BookCardProps {
  libro: Libro;
}

export function BookCard({ libro }: BookCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <div className="relative">
          <img
            src={libro.imagen}
            alt={libro.titulo}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={() => setShowDetails(true)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <Info className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{libro.titulo}</h3>
          <p className="text-gray-600 mb-2">Por {libro.autor}</p>
          <p className="text-gray-500 mb-2">{libro.anioPublicacion}</p>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className={libro.disponibilidad ? "text-green-600" : "text-red-600"}>
              {libro.disponibilidad ? "Disponible" : "No disponible"}
            </span>
          </div>
        </div>
      </div>

      {showDetails && (
        <BookDetails libro={libro} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}