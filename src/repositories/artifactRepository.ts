import {
  GetArtifactsRequest,
  GetArtifactsResponse,
} from '@entities/artifact/repository';
import { get } from '@utils/fetcher';

class ArtifactRepository {
  /**
   * [GET] List artifacts for a run. Takes an optional artifact_path prefix which if specified, the response contains only artifacts with the specified prefix.
   * If run_id doesn't exist or not provided, throws 'error_code' and 'message'.
   */
  async getArtifacts({
    run_id,
    path,
  }: GetArtifactsRequest): Promise<GetArtifactsResponse> {
    return get(
      `/ajax-api/2.0/preview/mlflow/artifacts/list?run_id=${run_id}&path=${path}`,
    );
  }
}

export default ArtifactRepository;
