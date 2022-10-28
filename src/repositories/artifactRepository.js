import { get } from '@utils/fetcher';

/**
 * @typedef {import('../interface/typedef.js').FileInfo} FileInfo
 */

class ArtifactRepository {
  /**
   * GET : List artifacts for a run. Takes an optional artifact_path prefix which if specified, the response contains only artifacts with the specified prefix.
   * @param {String} run_id ID of the run whose artifacts to list. This field is required.
   * @param {String | undefined} path Filter artifacts matching this path (a relative path from the root artifact directory).
   * @returns {Object<FileInfo>} returns JSON
   *
   * root URI {String}: Root artifact directory for the run.
   *
   * files { Array of :ref:`mlflowfileinfo`}: File location and metadata for artifacts.
   *
   * If run_id doesn't exist or not provided, throws 'error_code' and 'message'.
   */
  async getArtifacts(run_id, path) {
    return get(
      `/ajax-api/2.0/preview/mlflow/artifacts/list?run_id=${run_id}&path=${path}`,
    );
  }
}

export default ArtifactRepository;
