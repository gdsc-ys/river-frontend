class DeployService {
  constructor(modelRepository) {
    this.modelRepository = modelRepository;
  }

  async getVersions() {
    const versions = await this.modelRepository.getVersions();

    return versions;
  }
}

export default DeployService;
