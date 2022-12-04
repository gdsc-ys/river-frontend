import { Metric } from '@entities/metric';

/**
 * Get metric history
 */
export interface GetMetricHistoryRequest {
  run_id: string; // ID of the run from which to fetch metric values. This field is required
  metric_key: string; // Name of the metric. This field is required
}

export interface GetMetricHistoryResponse {
  metrics: Metric[];
}
