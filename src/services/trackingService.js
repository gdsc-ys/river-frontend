import ExperimentRepository from '@repositories/experimentRepository';

class TrackingService {
  constructor() {
    this.experimentRepository = new ExperimentRepository();
  }

  async getExperiments() {
    const experiments = await this.experimentRepository.getExperiments();

    return experiments;
  }
}

export const trackingService = new TrackingService();
