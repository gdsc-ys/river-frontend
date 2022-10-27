import { get, post } from '@utils/fetcher';

class ExperimentRepository {
  /**
   * GET: Get all experiments registed in mlflow.
   * @returns {JSON} JSOn of experiments sorted by 'experiment_id'
   */
  async getExperiments() {
    return get('/ajax-api/2.0/preview/mlflow/experiments/list');
  }

  /**
   * GET: Get experiments registered in mlflow if 'matched experiment_id' found
   * @param {String} experiment_id ID of the associated experiment. This field is required.
   * @returns {JSON} JSON of experiment matched by'experiment_id'.
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
   * @param {String} artifact_location Location where all artifacts for the experiment are stored. If not provided, the remote server will select an appropriate default.
   * @returns {String} Unique identifier for the experiment.
   */
  async createExperiment(name, artifact_location) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/create', {
      name: name,
      artifact_location: artifact_location,
    });
  }

  /**
   * POST : change existing experiment name
   * @param {String} experiment_id ID of the associated experiment. This field is required.
   * @param {String} new_name If provided, the experiment's name is changed to the new name. The new name must be unique.
   * @returns {null} returns nothing if success.
   *
   * If experiment_id doesn't exist, return 'error_code' and 'message'
   *
   * If duplicate experiment_id requested, throws 400 Bad Request response
   */
  async updateExperiment(experiment_id, new_name) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/update', {
      experiment_id: experiment_id,
      new_name: new_name,
    });
  }

  /**
   * POST : Delete by experiment_id
   * @param {String} experiment_id experiment_id the user want to delete. This field is required.
   * @returns {null} returns nothing if success.
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async deleteExperiment(experiment_id) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete', {
      experiment_id: experiment_id,
    });
  }

  /**
   * POST : Restore experiment marked for deletion
   * @param {String} experiment_id ID of the associated experiment. This field is required.
   * @returns {null} returns nothing if success.
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async restoreExperiment(experiment_id) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete', {
      experiment_id: experiment_id,
    });
  }

  // tag
  /**
   * Set a tag on an experiment. Experiment tags are metadata that can be updated.
   * @param {String} experiment_id 	ID of the experiment under which to log the tag. This field is required.
   * @param {String} key Name of the tag. Maximum size depends on storage backend. All storage backends are guaranteed to support key values up to 250 bytes in size. This field is required.
   * @param {String} value String value of the tag being logged. Maximum size depends on storage backend. All storage backends are guaranteed to support key values up to 5000 bytes in size. This field is required.
   * @returns {null} return nothing if success
   *
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async setExperimentTag(experiment_id, key, value) {
    return post('/ajax-api/2.0/preview/mlflow/experiments/set-experiment-tag', {
      experiment_id: experiment_id,
      key: key,
      value: value,
    });
  }
}

export default ExperimentRepository;
