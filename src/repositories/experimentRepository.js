import { get, post } from '@utils/fetcher';

class ExperimentRepository {
  async getExperiments() {
    return get('/ajax-api/2.0/preview/mlflow/experiments/list');
  }
  async getExperiment() {
    return get('/ajax-api/2.0/preview/mlflow/experiments/get');
  }
  async getExperimentByName() {
    return get('/ajax-api/2.0/preview/mlflow/experiments/get-by-name');
  }
  async createExperiment() {
    return post('/ajax-api/2.0/preview/mlflow/experiments/create');
  }
  async updateExperiment() {
    return post('/ajax-api/2.0/preview/mlflow/experiments/update');
  }
  async deleteExperiment() {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete');
  }

  // tag
  async setTag() {
    return post('/ajax-api/2.0/preview/mlflow/experiments/set-experiment-tag');
  }
}

export default ExperimentRepository;
