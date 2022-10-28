```
File containing all of the run tags in the mlflow. namespace.
See the System Tags section in the MLflow Tracking documentation for information on the
meaning of these tags.
```;

export const MLFLOW_EXPERIMENT_SOURCE_ID = 'mlflow.experiment.sourceId';
export const MLFLOW_EXPERIMENT_SOURCE_TYPE = 'mlflow.experiment.sourceType';
export const MLFLOW_RUN_NAME = 'mlflow.runName';
export const MLFLOW_RUN_NOTE = 'mlflow.note.content';
export const MLFLOW_PARENT_RUN_ID = 'mlflow.parentRunId';
export const MLFLOW_USER = 'mlflow.user';
export const MLFLOW_SOURCE_TYPE = 'mlflow.source.type';
export const MLFLOW_PIPELINE_TEMPLATE_NAME = 'mlflow.pipeline.template.name';
export const MLFLOW_PIPELINE_STEP_NAME = 'mlflow.pipeline.step.name';
export const MLFLOW_PIPELINE_PROFILE_NAME = 'mlflow.pipeline.profile.name';
export const MLFLOW_SOURCE_NAME = 'mlflow.source.name';
export const MLFLOW_GIT_COMMIT = 'mlflow.source.git.commit';
export const MLFLOW_GIT_BRANCH = 'mlflow.source.git.branch';
export const MLFLOW_GIT_REPO_URL = 'mlflow.source.git.repoURL';
export const MLFLOW_LOGGED_MODELS = 'mlflow.log-model.history';
export const MLFLOW_PROJECT_ENV = 'mlflow.project.env';
export const MLFLOW_PROJECT_ENTRY_POINT = 'mlflow.project.entryPoint';
export const MLFLOW_DOCKER_IMAGE_URI = 'mlflow.docker.image.uri';
export const MLFLOW_DOCKER_IMAGE_ID = 'mlflow.docker.image.id';

// Indicates that an MLflow run was created by an autologging integration
export const MLFLOW_AUTOLOGGING = 'mlflow.autologging';

export const MLFLOW_DATABRICKS_NOTEBOOK_ID = 'mlflow.databricks.notebookID';
export const MLFLOW_DATABRICKS_NOTEBOOK_PATH = 'mlflow.databricks.notebookPath';
export const MLFLOW_DATABRICKS_WEBAPP_URL = 'mlflow.databricks.webappURL';
export const MLFLOW_DATABRICKS_RUN_URL = 'mlflow.databricks.runURL';
export const MLFLOW_DATABRICKS_CLUSTER_ID = 'mlflow.databricks.cluster.id';
export const MLFLOW_DATABRICKS_WORKSPACE_URL = 'mlflow.databricks.workspaceURL';
export const MLFLOW_DATABRICKS_WORKSPACE_ID = 'mlflow.databricks.workspaceID';

// The unique ID of a command execution in a Databricks notebook
export const MLFLOW_DATABRICKS_NOTEBOOK_COMMAND_ID =
  'mlflow.databricks.notebook.commandID';

// The SHELL_JOB_ID and SHELL_JOB_RUN_ID tags are used for tracking the
// Databricks Job ID and Databricks Job Run ID associated with an MLflow Project run
export const MLFLOW_DATABRICKS_SHELL_JOB_ID = 'mlflow.databricks.shellJobID';
export const MLFLOW_DATABRICKS_SHELL_JOB_RUN_ID =
  'mlflow.databricks.shellJobRunID';

// The JOB_ID, JOB_RUN_ID, and JOB_TYPE tags are used for automatically recording Job information
// when MLflow Tracking APIs are used within a Databricks Job
export const MLFLOW_DATABRICKS_JOB_ID = 'mlflow.databricks.jobID';
export const MLFLOW_DATABRICKS_JOB_RUN_ID = 'mlflow.databricks.jobRunID';

// Here MLFLOW_DATABRICKS_JOB_TYPE means the job task type and MLFLOW_DATABRICKS_JOB_TYPE_INFO
// implies the job type which could be normal, ephemeral, etc.
export const MLFLOW_DATABRICKS_JOB_TYPE = 'mlflow.databricks.jobType';
export const MLFLOW_DATABRICKS_JOB_TYPE_INFO = 'mlflow.databricks.jobTypeInfo';

// For MLflow Repo Lineage tracking
export const MLFLOW_DATABRICKS_GIT_REPO_URL = 'mlflow.databricks.gitRepoUrl';
export const MLFLOW_DATABRICKS_GIT_REPO_COMMIT =
  'mlflow.databricks.gitRepoCommit';
export const MLFLOW_DATABRICKS_GIT_REPO_PROVIDER =
  'mlflow.databricks.gitRepoProvider';
export const MLFLOW_DATABRICKS_GIT_REPO_RELATIVE_PATH =
  'mlflow.databricks.gitRepoRelativePath';
export const MLFLOW_DATABRICKS_GIT_REPO_REFERENCE =
  'mlflow.databricks.gitRepoReference';
export const MLFLOW_DATABRICKS_GIT_REPO_REFERENCE_TYPE =
  'mlflow.databricks.gitRepoReferenceType';
export const MLFLOW_DATABRICKS_GIT_REPO_STATUS =
  'mlflow.databricks.gitRepoStatus';
export const MLFLOW_PROJECT_BACKEND = 'mlflow.project.backend';
