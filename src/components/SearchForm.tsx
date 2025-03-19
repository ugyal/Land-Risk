import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchFormProps {
  onSearch: (address: string) => void;
  isLoading: boolean;
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Enter Lot Number or Address
        </h1>
        <p className="text-gray-600 mb-6">
          Please provide your property details to begin the assessment.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter lot number or street address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              disabled={isLoading}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !address.trim()}
            className={`w-full mt-4 py-3 px-4 rounded-md text-white font-medium
              ${isLoading || !address.trim() 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isLoading ? 'Searching...' : 'Continue'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center"
          >
            <Search className="h-4 w-4 mr-1" />
            Need help finding your lot number? Learn more
          </a>
        </div>
      </div>
    </div>
  );
}