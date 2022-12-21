import { ViewType } from '@entities/common';
import {
  CreateExperimentRequest,
  CreateExperimentResponse,
  DeleteExperimentRequest,
  DeleteExperimentResponse,
  GetExperimentRequest,
  GetExperimentResponse,
  GetExperimentsRequest,
  GetExperimentsResponse,
  RestoreExperimentRequest,
  RestoreExperimentResponse,
  SetExperimentTagRequest,
  SetExperimentTagResponse,
  UpdateExperimentRequest,
  UpdateExperimentResponse,
} from '@entities/experiment/repository';
import { get, post } from '@utils/fetcher';

class ExperimentRepository {
  /**
   * [GET] Get all experiments registed in mlflow.
   */
  async getExperiments({
    view_type = ViewType.ALL,
    max_results = 1000,
  }: GetExperimentsRequest): Promise<GetExperimentsResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/experiments/list?view_type=${view_type}&max_results=${max_results}`,
    );
  }

  /**
   * [GET] Get experiments registered in mlflow if 'matched experiment_id' found
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async getExperiment({
    experiment_id,
  }: GetExperimentRequest): Promise<GetExperimentResponse> {
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
   * [POST] create new experiment by name
   */
  async createExperiment({
    name,
    artifact_location,
    tags,
  }: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    return post('/ajax-api/2.0/preview/mlflow/experiments/create', {
      name,
      artifact_location,
      tags,
    });
  }

  /**
   * [POST] change existing experiment name
   * If experiment_id doesn't exist, throws 'error_code' and 'message'
   * If duplicate experiment_id requested, throws 400 Bad Request response
   */
  async updateExperiment({
    experiment_id,
    new_name,
  }: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    return post('/ajax-api/2.0/preview/mlflow/experiments/update', {
      experiment_id,
      new_name,
    });
  }

  /**
   * [POST] Delete by experiment_id
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async deleteExperiment({
    experiment_id,
  }: DeleteExperimentRequest): Promise<DeleteExperimentResponse> {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete', {
      experiment_id,
    });
  }

  /**
   * [POST] Restore experiment marked for deletion
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async restoreExperiment({
    experiment_id,
  }: RestoreExperimentRequest): Promise<RestoreExperimentResponse> {
    return post('/ajax-api/2.0/preview/mlflow/experiments/delete', {
      experiment_id,
    });
  }

  /**
   * [POST] Set a tag on an experiment. Experiment tags are metadata that can be updated.
   * If 'experiment_id' doesn't exist, throws 'error_code' and 'message'
   */
  async setExperimentTag({
    experiment_id,
    key,
    value,
  }: SetExperimentTagRequest): Promise<SetExperimentTagResponse> {
    return post('/ajax-api/2.0/preview/mlflow/experiments/set-experiment-tag', {
      experiment_id,
      key,
      value,
    });
  }
}

export default ExperimentRepository;
