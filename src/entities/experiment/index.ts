import { LifecycleStage, Tag } from '@entities/common';

export interface Experiment {
  experiment_id: string; // Unique identifier for the experiment
  name: string; // Human readable name that identifies the experiment
  artifact_location: string; // Location where artifacts for the experiment are stored
  lifecycle_stage: LifecycleStage; // Current life cycle stage of the experiment: “active” or “deleted”. Deleted experiments are not returned by APIs
  tags: Tag[]; // Additional metadata key-value pairs

  creation_time: number; // Creation time
  last_update_time: number; // Last update time
}
