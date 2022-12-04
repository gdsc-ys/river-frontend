import { GetModelVersionRequest } from '@entities/model/repository';
import ModelRepository from '@repositories/modelRepository';

class DeployService {
  private readonly modelRepository: ModelRepository;

  constructor() {
    this.modelRepository = new ModelRepository();
  }

  async getModelVersion(request: GetModelVersionRequest) {
    const version = await this.modelRepository.getModelVersion(request);

    return version;
  }
}

export const deployService = new DeployService();
