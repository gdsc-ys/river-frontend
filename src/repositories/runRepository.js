import { get, post } from '@utils/fetcher';

/**
 * @typedef {import('../interface/typedef.js').Run} Run
 * @typedef {import('../interface/typedef.js').RunTag} RunTag
 * @typedef {import('../interface/typedef.js').RunStatus} RunStatus
 * @typedef {import('../interface/typedef.js').Metric} Metric
 * @typedef {import('../interface/typedef.js').Param} Param
 */

class RunRepository {
  /**
   * GET : Gets metadata, params, tags, and metrics for a run.
   * @param {String} run_id run ID. This field is required
   * @returns {Run} returns a single value for each metric key: the most recently logged metric value at the largest step.
   *
   * If invalid query or run_id not found, throws 'error_code' and 'message'.
   */
  async getRun(run_id) {
    return get(`/ajax-api/2.0/preview/mlflow/runs/get?run_id=${run_id}`);
  }

  /**
   * POST : Create new run.
   * @param {Date} start_time Timestamp of start_time. This field is required.
   * @param {String} experiment_id Experiment Id corresponding to new run. This field is required.
   * @param {?String} run_name Name of new run.
   * @param {?Array<RunTag>} tags Tags of new run. see '@data/mlflow_tags.js' for available run tags.
   * @returns {Run} return newly created run.
   */
  async createRun(start_time, experiment_id, run_name, tags) {
    return post('/ajax-api/2.0/preview/mlflow/runs/create', {
      start_time: start_time,
      experiment_id: experiment_id,
      run_name: run_name,
      tags: tags,
    });
  }

  /**
   * POST : Update run metadata
   * @param {String} run_id ID of the run to update. This field is required.
   * @param {?RunStatus} status Updated status of run.
   * @param {?Date} end_time Timestamp of when the run ended.
   * @param {?String} run_name Updated name of the run.
   * @returns {Run} return updataed metadata of the run.
   */
  async updateRun(run_id, status, end_time, run_name) {
    return post('/ajax-api/2.0/preview/mlflow/runs/update', {
      run_id: run_id,
      status: status,
      end_time: end_time,
      run_name: run_name,
    });
  }

  /**
   * POST : Delete existing run.
   * @param {String} run_id ID of the run to delete. This field is required
   * @returns {undefined} return nothing if success.
   */
  async deleteRun(run_id) {
    return post('/ajax-api/2.0/preview/mlflow/runs/delete', {
      run_id: run_id,
    });
  }

  /**
   * POST : Restore deleted run.
   * @param {String} run_id  ID of the run to restore if deleted. This field is required.
   * @returns {undefined} return nothing if success.
   */
  async restoreRun(run_id) {
    return post('/ajax-api/2.0/preview/mlflow/runs/restore', {
      run_id: run_id,
    });
  }

  /**
   * POST : get runs by experiment_id.
   * @param {Array<String>} experiment_id single experiment id. This field is required
   * @returns return run info related to experiment id query.
   */
  async searchRun(experiment_id) {
    return post('/ajax-api/2.0/preview/mlflow/runs/search', {
      experiment_ids: [...experiment_id],
    });
  }

  // log
  /** POST : Log a metric for a run
   * @param {String} run_id ID of the run under which to log the metric. This field is required.
   * @param {String} key Name of the metric. This field is required.
   * @param {String} value Double value of the metric being logged. This field is required.
   * @param {Date} timestamp Timestamp metric was logged. This field is required.
   * @param {?String} step Step at which to log the metric
   * @returns {undefined} return nothing if logging success
   */
  async logMetric(run_id, key, value, timestamp, step) {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-metric', {
      run_id: run_id,
      key: key,
      value: value,
      timestamp: timestamp,
      step: step,
    });
  }

  /**
   * POST : Log a parameter for a run.
   * @param {String} run_id ID of the run under which to log the metric. This field is required.
   * @param {String} key Name of the param. This field is required.
   * @param {String} value Double value of the param being logged. This field is required.
   * @returns {undefined} return nothing if logging success.
   */
  async logParameter(run_id, key, value) {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-parameter', {
      run_id: run_id,
      key: key,
      value: value,
    });
  }

  /**
   * POST : Log a batch for a run.
   * @param {String} run_id ID of the run under which to log the metric. This field is required.
   * @param {Array<Metric>} metrics Metrics array of the batch. This field is required.
   * @param {Array<Param>} params Params array of the batch. This field is required.
   * @param {?Array<RunTag>} tags Tags of new run. see '@data/mlflow_tags.js' for available run tags.
   * @returns {undefined} return nothing if batch success.
   *
   * Request Limit
   *
   * - No more than 1000 metric, params, and tags in total
   *
   * - Up to 1000 metrics
   *
   * - Up to 100 params
   *
   * - Up to 100 tags
   */
  async logBatch(run_id, metrics, params, tags) {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-batch', {
      run_id: run_id,
      metrics: metrics,
      params: params,
      tags: tags,
    });
  }

  // tag
  /**
   * POST : Sets a tag on a run.
   * @param {String} run_id ID of the run under which to set tag. This field is required.
   * @param {String} key key of the tag. This field is required.
   * @param {String} value value of the tag. This field is required.
   * @returns {undefined} return nothing if tag addition success.
   */
  async setRunTag(run_id, key, value) {
    return post('/ajax-api/2.0/preview/mlflow/runs/set-tag', {
      run_id: run_id,
      key: key,
      value: value,
    });
  }

  /**
   * POST : Delete a tag on a run by key
   * @param {String} run_id ID of the run under which to delete tag. This field is required.
   * @param {String} key key of the tag to delete. This field is required.
   * @returns {undefined} return nothing if tag deletion success.
   */
  async deleteTag(run_id, key) {
    return post('/ajax-api/2.0/preview/mlflow/runs/delete-tag', {
      run_id: run_id,
      key: key,
    });
  }
}

export default RunRepository;
