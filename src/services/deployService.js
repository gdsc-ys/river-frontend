import ModelRepository from 'repositories/modelRepository';

class DeployService {
  constructor() {
    this.modelRepository = new ModelRepository();
  }

  async getVersion() {
    const version = await this.modelRepository.getVersion();

    return version;
  }
}

export const deployService = new DeployService();
