import { Autor } from '../types';
import { User } from 'lucide-react';

interface AuthorsListProps {
  autores: Autor[];
}

export function AuthorsList({ autores }: AuthorsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {autores.map((autor) => (
        <div key={autor.nombre} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4">
            {autor.foto ? (
              <img
                src={autor.foto}
                alt={autor.nombre}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
            
            <div>
              <h3 className="text-xl font-semibold">{autor.nombre}</h3>
              <p className="text-gray-600">{autor.nacionalidad}</p>
            </div>
          </div>
          
          {autor.biografia && (
            <p className="mt-4 text-gray-700">{autor.biografia}</p>
          )}
        </div>
      ))}
    </div>
  );
}