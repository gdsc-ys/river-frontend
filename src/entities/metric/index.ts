/**
 * Metric associated with a run, represented as a key-value pair
 */
export interface Metric {
  key: string; // Key identifying this metric
  value: number; // Value associated with this metric
  step: number; // Step at which to log the metric

  timestamp: Date; // The timestamp at which this metric was recorded
}
