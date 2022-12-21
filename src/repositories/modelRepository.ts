import {
  CreateModelRequest,
  CreateModelResponse,
  CreateModelVersionRequest,
  CreateModelVersionResponse,
  DeleteModelRequest,
  DeleteModelResponse,
  DeleteModelTagRequest,
  DeleteModelTagResponse,
  DeleteModelVersionRequest,
  DeleteModelVersionResponse,
  DeleteModelVersionTagRequest,
  DeleteModelVersionTagResponse,
  GetDownloadURIRequest,
  GetDownloadURIResponse,
  GetLatestModelVersionsRequest,
  GetLatestModelVersionsResponse,
  GetModelRequest,
  GetModelResponse,
  GetModelsResponse,
  GetModelVersionRequest,
  GetModelVersionResponse,
  RenameModelRequest,
  RenameModelResponse,
  SearchModelsRequest,
  SearchModelsResponse,
  SetModelTagRequest,
  SetModelTagResponse,
  SetModelVersionTagRequest,
  SetModelVersionTagResponse,
  TransitionModelVersionStageRequest,
  TransitionModelVersionStageResponse,
  UpdateModelRequest,
  UpdateModelResponse,
  UpdateModelVersionRequest,
  UpdateModelVersionResponse,
} from '@entities/model/repository';
import { get, patch, post, remove } from '@utils/fetcher';

class ModelRepository {
  /**
   * [GET] Get list of registered models.
   */
  async getModels(): Promise<GetModelsResponse> {
    return get('/ajax-api/2.0/preview/mlflow/registered-models/list');
  }

  /**
   * [GET] Get registered model information by name.
   * If name doesn't exist, throws 'error_code' and 'message'.
   */
  async getModel({ name }: GetModelRequest): Promise<GetModelResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/registered-models/get?name=${name}`,
    );
  }

  /**
   * [GET] Get latest registered model information by name.
   * If name doesn't exist or invalid stages, throws 'error_code' and 'message'.
   */
  async getLatestModelVersions({
    name,
    stages,
  }: GetLatestModelVersionsRequest): Promise<GetLatestModelVersionsResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/registered-models/get-latest-versions?name=${name}&stages=${stages}`,
    );
  }

  /**
   * [POST] Create new reigstered model.
   * If name doesn't exist, throws 'error_code' and 'message'
   */
  async createModel({
    name,
    description,
    tags,
  }: CreateModelRequest): Promise<CreateModelResponse> {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/create', {
      name,
      description,
      tags,
    });
  }

  /**
   * [PATCH] Rename a registered model.
   * If name doesn't exist, throws 'error_code' and 'message'
   */
  async renameModel({
    name,
    new_name,
  }: RenameModelRequest): Promise<RenameModelResponse> {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/rename', {
      name,
      new_name,
    });
  }

  /**
   * [POST] Update description of a registered model
   * If name doesn't exist, throws 'error_code' and 'message'
   *
   */
  async updateModel({
    name,
    description,
  }: UpdateModelRequest): Promise<UpdateModelResponse> {
    return patch('/ajax-api/2.0/preview/mlflow/registered-models/update', {
      name,
      description,
    });
  }

  /**
   * [DELETE] Delete selected registered model.
   * If name doesn't exist, throws 'error_code' and 'message'
   */
  async deleteModel({
    name,
  }: DeleteModelRequest): Promise<DeleteModelResponse> {
    return remove('/ajax-api/2.0/preview/mlflow/registered-models/delete', {
      name,
    });
  }

  /**
   * [GET] Search registered model by filters
   * @todo Implement Advanced Search query
   * @url https://github.com/mlflow/mlflow/blob/994d291e4cb6bfad93e8b6edfa2580aa82804abd/docs/source/search-experiments.rst#id8
   */
  async searchModels({
    name,
    max_results = 100,
    sort_ascend = true,
  }: SearchModelsRequest): Promise<SearchModelsResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/registered-models/search?max_results=${max_results}&
      order_by=name+${sort_ascend ? 'ASC' : 'DESC'}${
        name && `&filter=name+ilike+%27%25${name}%25%27`
      }`,
    );
  }

  /**
   * [POST] Sets a tag on a run.
   * If name or key or value not specified, throws 'error_code' and 'message'.
   */
  async setModelTag({
    name,
    key,
    value,
  }: SetModelTagRequest): Promise<SetModelTagResponse> {
    return post('/ajax-api/2.0/preview/mlflow/registered-models/set-tag', {
      name,
      key,
      value,
    });
  }

  /**
   * [DELETE] Delete a tag on a run.
   * If name or key not specified, throws 'error_code' and 'message'.
   */
  async deleteModelTag({
    name,
    key,
  }: DeleteModelTagRequest): Promise<DeleteModelTagResponse> {
    return remove('/ajax-api/2.0/preview/mlflow/registered-models/delete-tag', {
      name,
      key,
    });
  }

  /**
   * [GET] Get a model version.
   * If name or version doesn't exist, throws 'error_code' and 'message'.
   */
  async getModelVersion({
    name,
    version,
  }: GetModelVersionRequest): Promise<GetModelVersionResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/model-versions/get?name=${name}&version=${version}`,
    );
  }

  /**
   * [POST] Create new model version (version++)
   * If name or source doesn't exist, throws 'error_code' and 'message'.
   */
  async createModelVersion({
    name,
    description,
    source,
    run_id,
    run_link,
    tags,
  }: CreateModelVersionRequest): Promise<CreateModelVersionResponse> {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/create', {
      name,
      description,
      source,
      run_id,
      run_link,
      tags,
    });
  }

  /**
   * [PATCH] Updates a model version
   * If name or source doesn't exist, throws 'error_code' and 'message'.
   */
  async updateModelVersion({
    name,
    version,
    description,
  }: UpdateModelVersionRequest): Promise<UpdateModelVersionResponse> {
    return patch('/ajax-api/2.0/preview/mlflow/model-versions/update', {
      name,
      version,
      description,
    });
  }

  /**
   * [DELETE] Delete a model version
   */
  async deleteModelVersion({
    name,
    version,
  }: DeleteModelVersionRequest): Promise<DeleteModelVersionResponse> {
    return remove('/ajax-api/2.0/preview/mlflow/model-versions/delete', {
      name,
      version,
    });
  }

  // Not implemented in mlflow
  // async searchModelVersions() {
  //   return get('/ajax-api/2.0/preview/mlflow/model-versions/search');
  // }

  /**
   * [POST] Transition a model version stage
   */
  async transitionModelVersionStage({
    name,
    version,
    stage,
    archive_existing_version,
  }: TransitionModelVersionStageRequest): Promise<TransitionModelVersionStageResponse> {
    return post(
      '/ajax-api/2.0/preview/mlflow/model-versions/transition-stage',
      {
        name,
        version,
        stage,
        archive_existing_version,
      },
    );
  }

  /**
   * [POST] Sets a tag on a specified version model.
   * If name or key or value not specified, throws 'error_code' and 'message'.
   */
  async setModelVersionTag({
    name,
    version,
    key,
    value,
  }: SetModelVersionTagRequest): Promise<SetModelVersionTagResponse> {
    return post('/ajax-api/2.0/preview/mlflow/model-versions/set-tag', {
      name,
      version,
      key,
      value,
    });
  }

  /**
   * [DELETE] Deletes a tag on a specified version model.
   * If name or key or value not specified, throws 'error_code' and 'message'.
   */
  async deleteModelVersionTag({
    name,
    version,
    key,
  }: DeleteModelVersionTagRequest): Promise<DeleteModelVersionTagResponse> {
    return remove('/ajax-api/2.0/preview/mlflow/model-versions/delete-tag', {
      name,
      version,
      key,
    });
  }

  /**
   * [GET] Get atrifact URI corresponding to name and version
   */
  async getDownloadURI({
    name,
    version,
  }: GetDownloadURIRequest): Promise<GetDownloadURIResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/model-versions/get-download-uri?name=${name}&version=${version}`,
    );
  }
}

export default ModelRepository;
