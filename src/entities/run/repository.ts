import { Param, Tag } from '@entities/common';
import { Metric } from '@entities/metric';
import { Run, RunStatus } from '@entities/run';

/**
 * Get run
 */
export interface GetRunRequest {
  run_id: string; // run ID. This field is required
}

export type GetRunResponse = Run; // returns a single value for each metric key: the most recently logged metric value at the largest step

/**
 * Create run
 */
export interface CreateRunRequest {
  experiment_id: string; // Experiment Id corresponding to new run. This field is required
  start_time: Date; // Timestamp of start_time. This field is required
  run_name?: string; // Name of new run
  tags?: Tag[]; // Tags of new run. see '@data/mlflow_tags.js' for available run tags
}

export type CreateRunResponse = Run;

/**
 * Update run
 */
export interface UpdateRunRequest {
  run_id: string; // ID of the run to update. This field is required
  run_name?: string; // Updated name of the runUpdated name of the run
  status?: RunStatus; // Updated status of run
  end_time?: Date; // Timestamp of when the run ended
}

export type UpdateRunResponse = Run;

/**
 * Delete run
 */
export interface DeleteRunRequest {
  run_id: string; // ID of the run to delete. This field is required
}

export type DeleteRunResponse = void;

/**
 * Restore run
 */
export interface RestoreRunRequest {
  run_id: string; // ID of the run to restore if deleted. This field is required
}

export type RestoreRunResponse = void;

/**
 * Search run
 */
export interface SearchRunRequest {
  experiment_id: string; // single experiment id. This field is required
}

export type SearchRunResponse = Run[];

/**
 * Log metric
 */
export interface LogMetricRequest {
  run_id: string; // ID of the run under which to log the metric. This field is required
  key: string; // Name of the metric. This field is required
  value: string; // Double value of the metric being logged. This field is required
  timestamp: Date; // Timestamp metric was logged. This field is required
  step?: string; // Step at which to log the metric
}

export type LogMetricResponse = void;

/**
 * Log parameter
 */
export interface LogParameterRequest {
  run_id: string; // ID of the run under which to log the metric. This field is required
  key: string; // Name of the param. This field is required
  value: string; // Double value of the param being logged. This field is required
}

export type LogParameterResponse = void;

/**
 * Log batch
 */
export interface LogBatchRequest {
  run_id: string; // ID of the run under which to log the metric. This field is required
  metrics: Metric[]; // Metrics array of the batch. This field is required
  params: Param[]; // Params array of the batch. This field is required
  tags?: Tag[]; // Tags of new run. see '@data/mlflow_tags.js' for available run tags
}

export type LogBatchResponse = void;

/**
 * Set run tag
 */
export interface SetRunTagRequest {
  run_id: string; // ID of the run under which to set tag. This field is required
  key: string; // key of the tag. This field is required
  value: string; // value of the tag. This field is required
}

export type SetRunTagResponse = void;

/**
 * Delete run tag
 */
export interface DeleteRunTagRequest {
  run_id: string; // ID of the run under which to delete tag. This field is required
  key: string; // key of the tag to delete. This field is required
}

export type DeleteRunTagResponse = void;
