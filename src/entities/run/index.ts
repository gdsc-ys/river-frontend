import { LifecycleStage, Param, Tag } from '@entities/common';
import { Metric } from '@entities/metric';

export enum RunStatus {
  RUNNING = 'RUNNING', // Run has been initiated
  SCHEDULED = 'SCHEDULED', // Run is scheduled to run at a later time
  FINISHED = 'FINISHED', // Run has completed
  FAILED = 'FAILED', // Run execution failed
  KILLED = 'KILLED', // Run killed by user
}

/**
 * Metadata of a single run
 */
export interface RunInfo {
  run_id: string; // Unique identifier for the run
  run_name: string; // The name of the run
  experiment_id: string; // The experiment ID
  status: RunStatus; // Current status of the run
  artifact_uri: string; // URI of the directory where artifacts should be uploaded. This can be a local path (starting with “/”), or a distributed file system (DFS) path, like s3://bucket/directory or dbfs:/my/directory. If not set, the local ./mlruns directory is chosen
  lifecycle_stage: LifecycleStage; // Current life cycle stage of the experiment : OneOf(“active”, “deleted”)

  start_time: Date; // Unix timestamp of when the run started in milliseconds
  end_time: Date; // Unix timestamp of when the run ended in milliseconds
}

/**
 * Run data (metrics, params, and tags)
 */
export interface RunData {
  metrics: Metric[]; // Run metrics
  params: Param[]; // Run parameters
  tags: Tag[]; // Additional metadata key-value pairs
}

/**
 * A single run
 */
export interface Run {
  info: RunInfo; // Run metadata
  data: RunData; // Run data
}
