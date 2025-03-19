export interface LandRiskData {
  biodiversityRisks: string;
  floodRisks: string;
  bushfireRisks: string;
  miningRisks: string;
  contaminationRisks: string;
  aboriginalLandCouncil: string;
}

export interface SearchResult {
  success: boolean;
  data?: LandRiskData;
  error?: string;
}