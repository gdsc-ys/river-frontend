import { Tag } from '@entities/common';

export enum ModelVersionStatus {
  PENDING_REGISTRATION = 'PENDING_REGISTRATION', // Request to register a new model version is pending as server performs background tasks
  FAILED_REGISTRATION = 'FAILED_REGISTRATION', // Request to register a new model version has failed
  READY = 'READY', // Model version is ready for use
}

export enum ModelStage {
  NONE = 'None',
  STAGING = 'Staging',
  PRODUCTION = 'Production',
  ARCHIVED = 'Archived',
}

export interface ModelVersion {
  name: string; // Unique name of the model
  version: string; // Model’s version number
  user_id: string; // User that created this model_version
  current_stage: ModelStage; // Current stage for this model_version
  description: string; // Description of this model_version
  source: string; // URI indicating the location of the source model artifacts, used when creating model_version
  run_id: string; // MLflow run ID used when creating model_version, if source was generated by an experiment run stored in MLflow tracking server
  run_link: string; // Direct link to the run that generated this versions
  status: ModelVersionStatus; // Current status of model_version
  status_message: string; // Details on current status, if it is pending or failed
  tags: Tag[]; // Additional metadata key-value pairs for this model_version

  creation_timestamp: Date; // Timestamp recorded when this model_version was created
  last_updated_timestamp: Date; // Timestamp recorded when metadata for this model_version was last updated
}

export interface RegisteredModel {
  name: string; // Unique name of the model
  user_id: string; // User that created this registered_model
  description: string; // Description of this registered_model
  source: string; // URI indicating the location of the source model artifacts, used when creating registered_model
  latest_versions: ModelVersion[]; // Collection of latest model versions for each stage. Only contains models with current READY status
  tags: Tag[]; // Additional metadata key-value pairs for this registered_model

  creation_timestamp: Date; // Timestamp recorded when this registered_model was created
  last_updated_timestamp: Date; // Timestamp recorded when metadata for this registered_model was last updated
}
