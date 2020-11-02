import { CronCommand, CronJob } from 'cron';
import Logger from '../../infrastructure/logger';

export const enum TimeZone {
  LosAngeles = 'America/Los_Angeles',
  NewYork = 'America/New_York',
  UTC = 'UTC'
}

export const enum CronInterval {
  EveryThirtySeconds = '*/30 * * * * *'
}

export default class JobSchedulerService {
  private scheduledJobs: Record<string, CronJob> = {};
  private timeZone: TimeZone;

  constructor(timeZone: TimeZone) {
    this.timeZone = timeZone;
  }

  public getScheduledJobs(): Record<string, CronJob> {
    return this.scheduledJobs;
  }

  public scheduleJob(
    name: string,
    interval: CronInterval,
    func: CronCommand): boolean {

    try {
      Logger.info(`Scheduling job ${name}`);

      if (this.scheduledJobs[name]) {
        Logger.warn(`Job ${name} already scheduled. Ignoring request.`);
        return false;
      }

      this.scheduledJobs[name] = this.makeCronJob(interval, func);
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }

  private makeCronJob(interval: CronInterval, func: CronCommand): CronJob {
    return new CronJob(interval, func, null, true, this.timeZone);
  }
}
