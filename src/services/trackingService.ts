import { GetExperimentsRequest } from '@entities/experiment/repository';
import { SearchRunRequest } from '@entities/run/repository';
import ExperimentRepository from '@repositories/experimentRepository';
import RunRepository from '@repositories/runRepository';

class TrackingService {
  private readonly experimentRepository: ExperimentRepository;
  private readonly runRepository: RunRepository;

  constructor() {
    this.experimentRepository = new ExperimentRepository();
    this.runRepository = new RunRepository();
  }

  async getExperiments(request: GetExperimentsRequest) {
    const response = await this.experimentRepository.getExperiments(request);

    return response;
  }

  async searchRun(request: SearchRunRequest) {
    const response = await this.runRepository.searchRun(request);

    return response;
  }
}

export const trackingService = new TrackingService();
