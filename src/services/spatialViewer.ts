import { LandRiskData, SearchResult } from '../types';

// Simulated API call to NSW Spatial Viewer
export async function fetchLandRiskData(address: string): Promise<SearchResult> {
  try {
    // In a real implementation, this would make actual API calls to the NSW Spatial Viewer
    // For now, we'll simulate a delay and return mock data
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate an API response
    const mockData: LandRiskData = {
      biodiversityRisks: "Threatened ecological community present",
      floodRisks: "Medium flood risk area",
      bushfireRisks: "Bushfire prone land - Category 1",
      miningRisks: "No known mining activity",
      contaminationRisks: "No known contamination",
      aboriginalLandCouncil: "Metropolitan Local Aboriginal Land Council"
    };

    return {
      success: true,
      data: mockData
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch data from NSW Spatial Viewer"
    };
  }
}