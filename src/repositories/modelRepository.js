import '@interface/typedef';

import { get, patch, post, remove } from '@utils/fetcher';

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

  //TODO: Implement Advanced Search query
  //https://github.com/mlflow/mlflow/blob/994d291e4cb6bfad93e8b6edfa2580aa82804abd/docs/source/search-experiments.rst#id8
  /**
   * GET : Search registered model by filters
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

  /**
   * POST : Sets a tag on a run.
   * @param {String} name Name of registered model. This field is required.
   * @param {String} key Name of the tag. Maximum size is 255 bytes. This field is required.
   * @param {String} value String value of the tag being logged. Maximum size is 500 bytes. This field is required.
   * @returns {Null} return nothing if success.
   *
   * If name or key or value not specified, throws 'error_code' and 'message'.
   */
  async setModelTag(name, key, value) {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/set-tag', {
      name: name,
      key: key,
      value: value,
    });
  }

  /**
   * DELETE: Delete a tag on a run.
   * @param {String} name Name of registered model. This field is required.
   * @param {String} key Name of the tag.This field is required.
   * @returns {Null} return nothing if success.
   *
   * If name or key not specified, throws 'error_code' and 'message'.
   */
  async deleteModelTag(name, key) {
    return remove('/ajax-api/2.0/preview/mlflow/registered-models/delete-tag', {
      name: name,
      key: key,
    });
  }

  // Model Version Control
  /**
   * GET : Get a model version.
   * @param {String} name Name of the registered model. This field is required.
   * @param {String} version Model version number. This field is required.
   * @returns {JSON} return JSON of model detail.
   *
   * If name or version doesn't exist, throws 'error_code' and 'message'.
   */
  async getModelVersion(name, version) {
    return get(
      `/ajax-api/2.0/preview/mlflow/model-versions/get?name=${name}&version=${version}`,
    );
  }

  /**
   * POST : Create new model version (version++)
   * @param {String} name Name of registered model. This field is required.
   * @param {String} source Source URI indicating the location of the model artifacts. This field is required
   * @param {String} run_id  MLflow run ID for correlation, if `source` was generated by an experiment run in MLflow Tracking.
   * @param {String} run_link This is the exact link of the run that generated this model version.
   * @param {Array<Tag>} tags Additional metadata. Must be Array of key-value paired JSON
   * @param {*} description Description for model version.
   * @returns {JSON} return JSON of model detail.
   *
   * If name or source doesn't exist, throws 'error_code' and 'message'.
   */
  async createModelVersion(name, source, run_id, run_link, description, tags) {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/create', {
      name: name,
      source: source,
      run_id: run_id,
      run_link: run_link,
      description: description,
      tags: tags,
    });
  }

  /**
   * PATCH : Updates a model version
   * @param {String} name Name of a registered model. This field is required.
   * @param {String} version Model version number. This field is required.
   * @param {String} description Description for model version.
   * @returns {JSON} return JSON of updated model detail.
   *
   * If name or source doesn't exist, throws 'error_code' and 'message'.
   */
  async updateModelVersion(name, version, description) {
    return patch('/ajax-api/2.0/preview/mlflow/model-versions/update', {
      name: name,
      version: version,
      description: description,
    });
  }

  /**
   * DELETE : Delete a model version
   * @param {String} name Name of a registered model. This field is required.
   * @param {String} version Model version number. This field is required.
   * @returns {Null} return nothing if success.
   */
  async deleteModelVersion(name, version) {
    return remove('/ajax-api/2.0/preview/mlflow/model-versions/delete', {
      name: name,
      version: version,
    });
  }

  // Not implemented in mlflow
  // async searchModelVersions() {
  //   return get('/ajax-api/2.0/preview/mlflow/model-versions/search');
  // }

  /**
   *
   * @param {String} name Name of the registered model. This field is required.
   * @param {String} version Model version number. This field is required.
   * @param {('None' | 'Staging' | 'Production' | 'Archived')} stage Transition `model_version` to this stage. This field is required.
   * @param {Boolean} archive_existing_version Change other versions to 'archive' stage
   * @returns {JSON} return JSON of updated model detail.
   */
  async transitionModelVersionStage(
    name,
    version,
    stage,
    archive_existing_version,
  ) {
    return post(
      '/ajax-api/2.0/preview/mlflow/model-versions/transition-stage',
      {
        name: name,
        version: version,
        stage: stage,
        archive_existing_version: archive_existing_version,
      },
    );
  }

  // Model Version tag
  /**
   * POST : Sets a tag on a specified version model.
   * @param {String} name Name of registered model. This field is required.
   * @param {String} version  Model version number. This field is required.
   * @param {String} key Name of the tag. Maximum size is 255 bytes. This field is required.
   * @param {String} value String value of the tag being logged. Maximum size is 500 bytes. This field is required.
   * @returns {Null} return nothing if success.
   *
   * If name or key or value not specified, throws 'error_code' and 'message'.
   */
  async setModelVersionTag(name, version, key, value) {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/set-tag', {
      name: name,
      version: version,
      key: key,
      value: value,
    });
  }

  /**
   * DELETE : Deletes a tag on a specified version model.
   * @param {String} name Name of registered model. This field is required.
   * @param {String} version Model version number. This field is required.
   * @param {String} key Name of the tag. Maximum size is 255 bytes. This field is required.
   * @returns {Null} return nothing if success.
   *
   * If name or key or value not specified, throws 'error_code' and 'message'.
   */
  async deleteModelVersionTag(name, version, key) {
    return remove('/ajax-api/2.0/preview/mlflow/model-versions/delete-tag', {
      name: name,
      version: version,
      key: key,
    });
  }

  /**
   * GET : Get atrifact URI corresponding to name and version
   * @param {String} name Name of registered model. This field is required.
   * @param {String} version Model version number. This field is required.
   * @returns {JSON} return artifact URI in JSON format
   */
  async getDownloadURI(name, version) {
    return get(
      `/ajax-api/2.0/preview/mlflow/model-versions/get-download-uri?name=${name}&version=${version}`,
    );
  }
}

export default ModelRepository;
