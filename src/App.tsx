import { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import RiskAssessmentForm from './components/RiskAssessmentForm';
import { fetchLandRiskData } from './services/spatialViewer';
import { LandRiskData } from './types';
import { AlertCircle } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState('');
  const [riskData, setRiskData] = useState<LandRiskData | null>(null);

  const handleSearch = async (searchAddress: string) => {
    setIsLoading(true);
    setError(null);
    setAddress(searchAddress);

    try {
      const result = await fetchLandRiskData(searchAddress);
      
      if (result.success && result.data) {
        setRiskData(result.data);
      } else {
        setError(result.error || 'Failed to fetch data');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#bfcba3]"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 30c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm15-15c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm-30 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z' fill='rgba(255,255,255,0.1)' /%3E%3C/svg%3E"),
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 10%, transparent 10%), 
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 10%, transparent 10%)
        `,
        backgroundSize: '60px 60px, 30px 30px, 30px 30px',
        backgroundPosition: '0 0, 0 0, 15px 15px'
      }}
    >
      <Header />
      
      {!riskData && !isLoading && (
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      )}

      {error && (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {(riskData || isLoading) && (
        <RiskAssessmentForm
          data={riskData || {
            biodiversityRisks: '',
            floodRisks: '',
            bushfireRisks: '',
            miningRisks: '',
            contaminationRisks: '',
            aboriginalLandCouncil: ''
          }}
          isLoading={isLoading}
          address={address}
        />
      )}
    </div>
  );
}

export default App;