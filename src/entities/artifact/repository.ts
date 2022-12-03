import { FileInfo } from '@entities/artifact';

export interface GetArtifactsRequest {
  run_id: string; // ID of the run whose artifacts to list. This field is required
  path?: string; // Filter artifacts matching this path (a relative path from the root artifact directory)
}

export interface GetArtifactsResponse {
  root_uri: string; // Root artifact directory for the run
  files: FileInfo[]; // File location and metadata for artifacts
}
