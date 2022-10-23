import { get } from 'utils/fetcher';

class ArtifactRepository {
  async getArtifacts() {
    return get('/ajax-api/2.0/preview/mlflow/artifacts/list');
  }
}

export default ArtifactRepository;
