import { get } from 'utils/fetcher';

class MetricRepository {
  async getMetricHistory() {
    return get('/ajax-api/2.0/preview/mlflow/metrics/get-historyt');
  }
}

export default MetricRepository;
