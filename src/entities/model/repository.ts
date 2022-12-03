import { Tag } from '@entities/common';
import { ModelStage, RegisteredModel } from '@entities/model';

/**
 * Get models
 */
export type GetModelsRequest = void;

export type GetModelsResponse = RegisteredModel[];

/**
 * Get model
 */
export interface GetModelRequest {
  name: string; // Name of registered model. This field is required
}

export type GetModelResponse = RegisteredModel;

/**
 * Get latest model versions
 */
export interface GetLatestModelVersionsRequest {
  name: string; // Name of Model. This field is required
  stages?: ModelStage; // Stage filter of model
}

export type GetLatestModelVersionsResponse = RegisteredModel;

/**
 * Create model
 */
export interface CreateModelRequest {
  name: string; // Name of new registered Model. This field is required
  description?: string; // Description of new registered model. Optional
  tags?: Tag[]; // Set tags of new registered model. Optional
}

export type CreateModelResponse = RegisteredModel;

/**
 * Rename model
 */
export interface RenameModelRequest {
  name: string; // Current name of registered model
  new_name: string; // New name for the model
}

export type RenameModelResponse = RegisteredModel;

/**
 * Update model
 */
export interface UpdateModelRequest {
  name: string; // Current name of registered model
  description?: string; // New description for the model
}

export type UpdateModelResponse = RegisteredModel;
