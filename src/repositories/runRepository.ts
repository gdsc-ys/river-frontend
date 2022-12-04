import {
  CreateRunRequest,
  CreateRunResponse,
  DeleteRunRequest,
  DeleteRunResponse,
  DeleteRunTagRequest,
  DeleteRunTagResponse,
  GetRunRequest,
  GetRunResponse,
  LogBatchRequest,
  LogBatchResponse,
  LogMetricRequest,
  LogMetricResponse,
  LogParameterRequest,
  LogParameterResponse,
  RestoreRunRequest,
  RestoreRunResponse,
  SearchRunRequest,
  SearchRunResponse,
  SetRunTagRequest,
  SetRunTagResponse,
  UpdateRunRequest,
  UpdateRunResponse,
} from '@entities/run/repository';
import { get, post } from '@utils/fetcher';

class RunRepository {
  /**
   * [GET] Gets metadata, params, tags, and metrics for a run.
   * If invalid query or run_id not found, throws 'error_code' and 'message'.
   */
  async getRun({ run_id }: GetRunRequest): Promise<GetRunResponse> {
    return get(`/ajax-api/2.0/preview/mlflow/runs/get?run_id=${run_id}`);
  }

  /**
   * [POST] Create new run.
   */
  async createRun({
    experiment_id,
    start_time,
    run_name,
    tags,
  }: CreateRunRequest): Promise<CreateRunResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/create', {
      experiment_id,
      start_time,
      run_name,
      tags,
    });
  }

  /**
   * [POST] Update run metadata
   */
  async updateRun({
    run_id,
    run_name,
    status,
    end_time,
  }: UpdateRunRequest): Promise<UpdateRunResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/update', {
      run_id,
      run_name,
      status,
      end_time,
    });
  }

  /**
   * [POST] Delete existing run.
   */
  async deleteRun({ run_id }: DeleteRunRequest): Promise<DeleteRunResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/delete', {
      run_id,
    });
  }

  /**
   * [POST] Restore deleted run.
   */
  async restoreRun({ run_id }: RestoreRunRequest): Promise<RestoreRunResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/restore', {
      run_id,
    });
  }

  /**
   * [POST] get runs by experiment_id.
   */
  async searchRun({
    experiment_ids,
  }: SearchRunRequest): Promise<SearchRunResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/search', {
      experiment_ids,
    });
  }

  /**
   * [POST] Log a metric for a run
   */
  async logMetric({
    run_id,
    key,
    value,
    timestamp,
    step,
  }: LogMetricRequest): Promise<LogMetricResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-metric', {
      run_id,
      key,
      value,
      timestamp,
      step,
    });
  }

  /**
   * [POST] Log a parameter for a run.
   */
  async logParameter({
    run_id,
    key,
    value,
  }: LogParameterRequest): Promise<LogParameterResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-parameter', {
      run_id,
      key,
      value,
    });
  }

  /**
   * [POST] Log a batch for a run.
   *
   * Request Limit
   * - No more than 1000 metric, params, and tags in total
   * - Up to 1000 metrics
   * - Up to 100 params
   * - Up to 100 tags
   */
  async logBatch({
    run_id,
    metrics,
    params,
    tags,
  }: LogBatchRequest): Promise<LogBatchResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/log-batch', {
      run_id,
      metrics,
      params,
      tags,
    });
  }

  /**
   * [POST] Sets a tag on a run.
   */
  async setRunTag({
    run_id,
    key,
    value,
  }: SetRunTagRequest): Promise<SetRunTagResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/set-tag', {
      run_id,
      key,
      value,
    });
  }

  /**
   * [POST] Delete a tag on a run by key
   */
  async deleteRunTag({
    run_id,
    key,
  }: DeleteRunTagRequest): Promise<DeleteRunTagResponse> {
    return post('/ajax-api/2.0/preview/mlflow/runs/delete-tag', {
      run_id,
      key,
    });
  }
}

export default RunRepository;
