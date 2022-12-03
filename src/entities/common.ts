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
  key: string;
  value: string;
}
