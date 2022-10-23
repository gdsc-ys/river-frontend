class TrackingService {
  constructor(experimentRepository) {
    this.experimentRepository = experimentRepository;
  }

  async getExperiments() {
    const experiments = await this.experimentRepository.getExperiments();

    return experiments;
  }
}

export default TrackingService;
