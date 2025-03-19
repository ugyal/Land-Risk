import { ExternalLink, Loader } from 'lucide-react';
import { LandRiskData } from '../types';

interface RiskAssessmentFormProps {
  data: LandRiskData;
  isLoading: boolean;
  address: string;
}

export default function RiskAssessmentForm({ data, isLoading, address }: RiskAssessmentFormProps) {
  const openSpatialViewer = () => {
    window.open(`https://www.planningportal.nsw.gov.au/spatialviewer/#/find-a-property/address?q=${encodeURIComponent(address)}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader className="h-8 w-8 animate-spin text-green-600 mx-auto mb-4" />
          <p className="text-gray-600">Fetching property data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Land Risk Assessment Form
            </h2>
            <p className="text-gray-600 mt-1">
              Use this form to assess environmental and land-use risks. The Spatial Viewer also
              identifies the Local Aboriginal Land Council jurisdiction.
            </p>
          </div>
          <button
            onClick={openSpatialViewer}
            className="flex flex-col items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-blue-600 mb-1" />
            <span className="text-blue-600 text-sm text-center">
              View in NSW<br />Planning<br />Portal
            </span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-base font-bold text-gray-900 mb-1">
              Biodiversity Risks
            </label>
            <input
              type="text"
              value={data.biodiversityRisks}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-1">
              Flood Risks
            </label>
            <input
              type="text"
              value={data.floodRisks}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-1">
              Bushfire Risks
            </label>
            <input
              type="text"
              value={data.bushfireRisks}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-1">
              Mining Risks
            </label>
            <input
              type="text"
              value={data.miningRisks}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-1">
              Contamination Risks
            </label>
            <input
              type="text"
              value={data.contaminationRisks}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-1">
              Local Aboriginal Land Council
            </label>
            <input
              type="text"
              value={data.aboriginalLandCouncil}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}