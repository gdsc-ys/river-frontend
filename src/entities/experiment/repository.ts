import { Tag, ViewType } from '@entities/common';
import { Experiment } from '@entities/experiment';

/**
 * Get experiments
 */
export interface GetExperimentsRequest {
  view_type?: ViewType; // Qualifier for type of experiments to be returned. If unspecified, return only active experiments
  max_results?: number; // Maximum number of experiments desired. If max_results is unspecified, return all experiments
}

export interface GetExperimentsResponse {
  experiments: Experiment[];
}

/**
 * Get experiment
 */
export interface GetExperimentRequest {
  experiment_id: string; // ID of the associated experiment. This field is required
}

export interface GetExperimentResponse {
  experiment: Experiment;
}

/**
 * Create experiment
 */
export interface CreateExperimentRequest {
  name: string; // New experiment name. This field is required
  artifact_location?: string; // Location where all artifacts for the experiment are stored. If not provided, the remote server will select an appropriate default
  tags?: Tag[]; // Set tags of new experiment. Optional
}

export interface CreateExperimentResponse {
  experiment_id: string;
}

/**
 * Update experiment
 */
export interface UpdateExperimentRequest {
  experiment_id: string; // ID of the associated experiment. This field is required
  new_name?: string; // If provided, the experiment's name is changed to the new name. The new name must be unique
}

export type UpdateExperimentResponse = void;

/**
 * Delete experiment
 */
export interface DeleteExperimentRequest {
  experiment_id: string; // experiment_id the user want to delete. This field is required
}

export type DeleteExperimentResponse = void;

/**
 * Restore experiment
 */
export interface RestoreExperimentRequest {
  experiment_id: string; // ID of the associated experiment. This field is required
}

export type RestoreExperimentResponse = void;

/**
 * Set experiment tag
 */
export interface SetExperimentTagRequest {
  experiment_id: string; // ID of the experiment under which to log the tag. This field is required
  key: string; // Name of the tag. Maximum size depends on storage backend. All storage backends are guaranteed to support key values up to 250 bytes in size. This field is required
  value: string; // String value of the tag being logged. Maximum size depends on storage backend. All storage backends are guaranteed to support key values up to 5000 bytes in size. This field is required
}

export type SetExperimentTagResponse = void;
