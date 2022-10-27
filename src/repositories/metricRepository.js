import { get } from '@utils/fetcher';

/**
 * @typedef {import('../interface/typedef.js').Metric} Metric
 */

class MetricRepository {
  /**
   * GET : Get a list of all values for the specified metric for a given run.
   * @param {String} run_id ID of the run from which to fetch metric values. This field is required.
   * @param {String} metric_key Name of the metric. This field is required.
   * @returns {Array<Metric>} JSON list of metric specified by metric_key sorted by timestamp.
   */
  async getMetricHistory(run_id, metric_key) {
    return get(
      `/ajax-api/2.0/preview/mlflow/metrics/get-history?run_id=${run_id}&metric_key=${metric_key}`,
    );
  }
}

export default MetricRepository;
