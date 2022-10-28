import { get, post } from '@utils/fetcher';

/**
 * @typedef {import('../interface/typedef.js').Experiment} Experiment
 * @typedef {}
 */

class ExperimentRepository {
  /**
   * GET: Get all experiments registed in mlflow.
   * @param {ViewType | undefined} view_type Qualifier for type of experiments to be returned. If unspecified, return only active experiments.
   * @param {String | undefined} max_results Maximum number of experiments desired. If max_results is unspecified, return all experiments.
   * @returns {Array<Experiment>} JSON of Array of experiments.
   */
  async getExperiments(view_type = 'ALL', max_results = '1000') {
    return get(
      `/ajax-api/2.0/preview/mlflow/experiments/list?view_type=${view_type}&max_results=${max_results}`,
    );
  }

  /**
   * GET: Get experiments registered in mlflow if 'matched experiment_id' found
   * @param {String} experiment_id ID of the associated experiment. This field is required.
   * @returns {Experiment} JSON of experiment matched by'experiment_id'.
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async getExperiment(experiment_id) {
    return get(
      `/ajax-api/2.0/preview/mlflow/experiments/get?experiment_id=${experiment_id}`,
    );
  }

  /**
   * Not Working!!!
   */
  // async getExperimentByName() {
  //   return get('/ajax-api/2.0/preview/mlflow/experiments/get-by-name');
  // }

  /**
   * POST : create new experiment by name
   * @param {String} name New experiment name. This field is required.
   * @param {String | undefined} artifact_location Location where all artifacts for the experiment are stored. If not provided, the remote server will select an appropriate default.
   * @param {Array<ExperimentTag> | undefined} tags Set tags of new experiment. Optional.
   * @returns {String} return 'experiment_id' of created experiment
   */
  async createExperiment(name, artifact_location, tags) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/create', {
      name: name.toString(),
      artifact_location: artifact_location,
      tags: tags,
    });
  }

  /**
   * POST : change existing experiment name
   * @param {String} experiment_id ID of the associated experiment. This field is required.
   * @param {String | undefined} new_name If provided, the experiment's name is changed to the new name. The new name must be unique.
   * @returns {undefined} returns nothing if success.
   *
   * If experiment_id doesn't exist, throws 'error_code' and 'message'
   *
   * If duplicate experiment_id requested, throws 400 Bad Request response
   */
  async updateExperiment(experiment_id, new_name) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/update', {
      experiment_id: experiment_id.toString(),
      new_name: new_name?.toString(),
    });
  }

  /**
   * POST : Delete by experiment_id
   * @param {String} experiment_id experiment_id the user want to delete. This field is required.
   * @returns {undefined} returns nothing if success.
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async deleteExperiment(experiment_id) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete', {
      experiment_id: experiment_id.toString(),
    });
  }

  /**
   * POST : Restore experiment marked for deletion
   * @param {String} experiment_id ID of the associated experiment. This field is required.
   * @returns {undefined} returns nothing if success.
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async restoreExperiment(experiment_id) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete', {
      experiment_id: experiment_id.toString(),
    });
  }

  // tag
  /**
   * POST : Set a tag on an experiment. Experiment tags are metadata that can be updated.
   * @param {String} experiment_id 	ID of the experiment under which to log the tag. This field is required.
   * @param {String} key Name of the tag. Maximum size depends on storage backend. All storage backends are guaranteed to support key values up to 250 bytes in size. This field is required.
   * @param {String} value String value of the tag being logged. Maximum size depends on storage backend. All storage backends are guaranteed to support key values up to 5000 bytes in size. This field is required.
   * @returns {undefined} return nothing if success
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async setExperimentTag(experiment_id, key, value) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/set-experiment-tag', {
      experiment_id: experiment_id.toString(),
      key: key.toString(),
      value: value.toString(),
    });
  }
}

export default ExperimentRepository;
