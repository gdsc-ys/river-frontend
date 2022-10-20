import { get, post } from 'utils/fetcher';

class RunRepository {
  async getRun() {
    return get('/ajax-api/2.0/preview/mlflow/runs/get');
  }
  async createRun() {
    return post('/ajax-api/2.0/preview/mlflow/runs/create');
  }
  async updateRun() {
    return post('/ajax-api/2.0/preview/mlflow/runs/update');
  }
  async deleteRun() {
    return post('/ajax-api/2.0/preview/mlflow/runs/delete');
  }
  async restoreRun() {
    return post('/ajax-api/2.0/preview/mlflow/runs/restore');
  }
  async searchRuns() {
    return post('/ajax-api/2.0/preview/mlflow/runs/search');
  }

  // log
  async logMetric() {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-metric');
  }
  async logParameter() {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-parameter');
  }

  // tag
  async setTag() {
    return post('/ajax-api/2.0/preview/mlflow/runs/set-tag');
  }
  async deleteTag() {
    return post('/ajax-api/2.0/preview/mlflow/runs/delete-tag');
  }
}

export default RunRepository;
