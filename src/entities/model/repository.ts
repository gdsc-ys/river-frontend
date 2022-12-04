import { Tag } from '@entities/common';
import { ModelStage, ModelVersion, RegisteredModel } from '@entities/model';

/**
 * Get models
 */
export type GetModelsRequest = void;

export interface GetModelsResponse {
  registered_models: RegisteredModel[];
}

/**
 * Get model
 */
export interface GetModelRequest {
  name: string; // Name of registered model. This field is required
}

export interface GetModelResponse {
  registered_model: RegisteredModel;
}

/**
 * Get latest model versions
 */
export interface GetLatestModelVersionsRequest {
  name: string; // Name of Model. This field is required
  stages?: ModelStage; // Stage filter of model
}

export interface GetLatestModelVersionsResponse {
  registered_model: RegisteredModel;
}

/**
 * Create model
 */
export interface CreateModelRequest {
  name: string; // Name of new registered Model. This field is required
  description?: string; // Description of new registered model. Optional
  tags?: Tag[]; // Set tags of new registered model. Optional
}

export interface CreateModelResponse {
  registered_model: RegisteredModel;
}

/**
 * Rename model
 */
export interface RenameModelRequest {
  name: string; // Current name of registered model
  new_name: string; // New name for the model
}

export interface RenameModelResponse {
  registered_model: RegisteredModel;
}

/**
 * Update model
 */
export interface UpdateModelRequest {
  name: string; // Current name of registered model
  description?: string; // New description for the model
}

export interface UpdateModelResponse {
  registered_model: RegisteredModel;
}

/**
 * Delete model
 */
export interface DeleteModelRequest {
  name: string; // Name of registered model
}

export type DeleteModelResponse = void;

/**
 * Search models
 */
export interface SearchModelsRequest {
  name: string; // Name filter
  max_results?: number; // Maximum search results
  sort_ascend?: boolean; // If true, sort result in ascending order
}

export interface SearchModelsResponse {
  registered_models: RegisteredModel[];
}

/**
 * Set model tag
 */
export interface SetModelTagRequest {
  name: string; // Name of registered model. This field is required
  key: string; // Name of the tag. Maximum size is 255 bytes. This field is required
  value: string; // String value of the tag being logged. Maximum size is 500 bytes. This field is required
}

export type SetModelTagResponse = void;

/**
 * Delete model tag
 */
export interface DeleteModelTagRequest {
  name: string; // Name of registered model. This field is required
  key: string; // Name of the tag. This field is required
}

export type DeleteModelTagResponse = void;

/**
 * Get model version
 */
export interface GetModelVersionRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
}

export interface GetModelVersionResponse {
  model_version: ModelVersion;
}

/**
 * Create model version
 */
export interface CreateModelVersionRequest {
  name: string; // Name of registered model. This field is required
  description: string; // Description for model version
  source: string; // Source URI indicating the location of the model artifacts. This field is required
  run_id?: string; // MLflow run ID for correlation, if `source` was generated by an experiment run in MLflow Tracking
  run_link?: string; // This is the exact link of the run that generated this model version
  tags?: Tag[]; // Additional metadata. Must be Array of key-value paired JSON
}

export interface CreateModelVersionResponse {
  model_version: ModelVersion;
}

/**
 * Update model version
 */
export interface UpdateModelVersionRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
  description?: string; // Description for model version
}

export interface UpdateModelVersionResponse {
  model_version: ModelVersion;
}

/**
 * Delete model version
 */
export interface DeleteModelVersionRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
}

export type DeleteModelVersionResponse = void;

/**
 * Transition model version stage
 */
export interface TransitionModelVersionStageRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
  stage: ModelStage; // Transition `model_version` to this stage. This field is required
  archive_existing_version?: boolean; // Change other versions to 'archive' stage
}

export interface TransitionModelVersionStageResponse {
  model_version: ModelVersion;
}

/**
 * Set model version tag
 */
export interface SetModelVersionTagRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
  key: string; // Name of the tag. Maximum size is 255 bytes. This field is required
  value: string; // String value of the tag being logged. Maximum size is 500 bytes. This field is required
}

export type SetModelVersionTagResponse = void;

/**
 * Delete model version tag
 */
export interface DeleteModelVersionTagRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
  key: string; // Name of the tag. Maximum size is 255 bytes. This field is required
}

export type DeleteModelVersionTagResponse = void;

/**
 * Get download uri
 */
export interface GetDownloadURIRequest {
  name: string; // Name of registered model. This field is required
  version: string; // Model version number. This field is required
}

export interface GetDownloadURIResponse {
  artifact_uri: string; // return artifact URI in JSON format
}
