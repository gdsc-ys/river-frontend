import { get, patch, post, remove } from '@utils/fetcher';

/**
 * @typedef Tag
 * @type {Object}
 * @property {String} key key of tag
 * @property {String} value value of tag
 */

class ModelRepository {
  /**
   * GET : Get list of registered models.
   * @returns {JSON} return JSON of registed model details.
   */
  async getModels() {
    return get('/ajax-api/2.0/preview/mlflow/registered-models/list');
  }

  /**
   * GET : Get registered model information by name.
   * @param {String} name Name of registered model. This field is required.
   * @returns {JSON} return JSON of registered model details.
   *
   * If name doesn't exist, throws 'error_code' and 'message'.
   */
  async getModel(name) {
    return get(
      `/ajax-api/2.0/preview/mlflow/registered-models/get?name=${name}`,
    );
  }

  /**
   * GET : Get latest registered model information by name.
   * @param {String} name Name of Model. This field is required.
   * @param {('None' | 'Staging' | 'Production' | 'Archived')} stages Stage filter of model.
   * @returns return JSON of model details.
   *
   * If name doesn't exist or invalid stages, throws 'error_code' and 'message'.
   */
  async getLatestModelVersions(name, stages) {
    return get(
      `/ajax-api/2.0/preview/mlflow/registered-models/get-latest-versions?name=${name}&stages=${stages}`,
    );
  }

  /**
   * POST: Create new reigstered model.
   * @param {String} name Name of new registered Model. This field is required.
   * @param {Array<Tag>} tags Set tags of new registered model. Optional.
   * @param {String} description Description of new registered model. Optional.
   * @returns {JSON} return JSON of model details.
   *
   * If name doesn't exist, throws 'error_code' and 'message'
   */
  async createModel(name, tags, description) {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/create', {
      name: name,
      tags: tags,
      description: description,
    });
  }

  /**
   * PATCH : Rename a registered model.
   * @param {String} name Current name of registered model.
   * @param {String} new_name New name for the model.
   * @returns {JSON} return JSON of model details.
   *
   * If name doesn't exist, throws 'error_code' and 'message'
   */
  async renameModel(name, new_name) {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/rename', {
      name: name,
      new_name: new_name,
    });
  }

  /**
   * POST : Update description of a registered model
   * @param {String} name Current name of registered model.
   * @param {String} description New description for the model.
   * @returns {JSON} return JSON of model details.
   *
   * If name doesn't exist, throws 'error_code' and 'message'
   *
   */
  async updateModel(name, description) {
    return patch('/ajax-api/2.0/preview/mlflow/registered-models/update', {
      name: name,
      description: description,
    });
  }

  /**
   * DELETE : Delete selected registered model.
   * @param {String} name Name of registered model.
   * @returns {null} return nothing is success.
   *
   * If name doesn't exist, throws 'error_code' and 'message'
   */
  async deleteModel(name) {
    return remove('/ajax-api/2.0/preview/mlflow/registered-models/delete', {
      name: name,
    });
  }

  /**
   * GET : Search registered model by filters
   * //TODO: Implement Advanced Search query
   * //https://github.com/mlflow/mlflow/blob/994d291e4cb6bfad93e8b6edfa2580aa82804abd/docs/source/search-experiments.rst#id8
   * @param {String} name Name filter.
   * @param {Number} max_results Maximum search results.
   * @param {Boolean} sort_ascend If true, sort result in ascending order.
   * @returns {JSON} return JSON of search result.
   */
  async searchModels(name, max_results = 100, sort_ascend = true) {
    return get(
      `/ajax-api/2.0/preview/mlflow/registered-models/search?max_results=${max_results}&
      order_by=name+${sort_ascend ? 'ASC' : 'DESC'}${
        name && `&filter=name+ilike+%27%25${name}%25%27`
      }`,
    );
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
