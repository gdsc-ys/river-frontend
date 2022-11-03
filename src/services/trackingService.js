import ExperimentRepository from '@repositories/experimentRepository';
import RunRepository from '@repositories/runRepository';

class TrackingService {
  constructor() {
    this.experimentRepository = new ExperimentRepository();
    this.runRepository = new RunRepository();
  }

  async getExperiments() {
    const experiments = await this.experimentRepository.getExperiments();

    return experiments.experiments;
  }

  async searchRun(experiment_id) {
    const result = await this.runRepository.searchRun(experiment_id);

    return result;
  }
}

export const trackingService = new TrackingService();
