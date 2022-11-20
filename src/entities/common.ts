export enum LifecycleStage {
  ACTIVE = 'active',
  DELETED = 'deleted',
}

export interface Tag {
  key: string;
  value: string;
}
