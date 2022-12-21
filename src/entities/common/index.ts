export enum LifecycleStage {
  ACTIVE = 'active',
  DELETED = 'deleted',
}

export enum ViewType {
  ACTIVE_ONLY = 'ACTIVE_ONLY',
  DELETED_ONLY = 'DELETED_ONLY',
  ALL = 'ALL',
}

export interface Tag {
  key: string; // The tag key
  value: string; // The tag value
}

/**
 * Parameters associated with a run
 */
export interface Param {
  key: string; // Key identifying this param
  value: string; // Value associated with this param
}
