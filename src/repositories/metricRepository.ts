import {
  GetMetricHistoryRequest,
  GetMetricHistoryResponse,
} from '@entities/metric/repository';
import { get } from '@utils/fetcher';

class MetricRepository {
  /**
   * [GET] Get a list of all values for the specified metric for a given run.
   */
  async getMetricHistory({
    run_id,
    metric_key,
  }: GetMetricHistoryRequest): Promise<GetMetricHistoryResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/metrics/get-history?run_id=${run_id}&metric_key=${metric_key}`,
    );
  }
}

export default MetricRepository;
