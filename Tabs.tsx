import { TABS } from '../utils/constants';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
      <button
        className={`flex-1 py-2 px-4 rounded-md ${
          activeTab === TABS.BOOKS
            ? 'bg-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onTabChange(TABS.BOOKS)}
      >
        Libros
      </button>
      <button
        className={`flex-1 py-2 px-4 rounded-md ${
          activeTab === TABS.AUTHORS
            ? 'bg-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onTabChange(TABS.AUTHORS)}
      >
        Autores
      </button>
    </div>
  );
}