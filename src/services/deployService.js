import ModelRepository from 'repositories/modelRepository';

class DeployService {
  constructor() {
    this.modelRepository = new ModelRepository();
  }

  async getVersions() {
    const versions = await this.modelRepository.getVersions();

    return versions;
  }
}

export const deployService = new DeployService();
