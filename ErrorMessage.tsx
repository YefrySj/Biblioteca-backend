import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        <p>{message}</p>
      </div>
    </div>
  );
}