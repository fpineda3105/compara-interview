export interface InsuranceExtractorSummary {
  executeForDays(days: number): Promise<void>;
}
