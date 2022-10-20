import { get, patch, post, remove } from 'utils/fetcher';

class ModelRepository {
  async getModels() {
    return get('/ajax-api/2.0/preview/mlflow/registered-models/list');
  }
  async getModel() {
    return get('/ajax-api/2.0/preview/mlflow/registered-models/get');
  }
  async createModel() {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/create');
  }
  async updateModel() {
    return patch('/ajax-api/2.0/preview/mlflow/registered-models/update');
  }
  async deleteModel() {
    return remove('/ajax-api/2.0/preview/mlflow/registered-models/delete');
  }
  async searchModels() {
    return get('/ajax-api/2.0/preview/mlflow/registered-models/search');
  }

  // version
  async getVersion() {
    return get('/ajax-api/2.0/preview/mlflow/model-versions/get');
  }
  async createVersion() {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/create');
  }
  async updateVersion() {
    return patch('/ajax-api/2.0/preview/mlflow/model-versions/update');
  }
  async deleteVersion() {
    return remove('/ajax-api/2.0/preview/mlflow/model-versions/delete');
  }
  async searchVersions() {
    return get('/ajax-api/2.0/preview/mlflow/model-versions/search');
  }
  async transitionVersionStage() {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/transition-stage');
  }

  // tag
  async setTag() {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/set-tag');
  }
  async deleteTag() {
    return remove('/ajax-api/2.0/preview/mlflow/registered-models/delete-tag');
  }
  async setVersionTag() {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/set-tag');
  }
  async deleteVersionTag() {
    return remove('/ajax-api/2.0/preview/mlflow/model-versions/delete-tag');
  }
}

export default ModelRepository;
