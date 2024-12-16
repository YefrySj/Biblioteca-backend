import { Library } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-6 px-4">
      <div className="container mx-auto flex items-center gap-4">
        <Library className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Biblioteca Virtual</h1>
      </div>
    </header>
  );
}