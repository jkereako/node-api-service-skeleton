import Logger from './logger';
import { Db, MongoClient } from 'mongodb';

export default class DatabaseClient {
  private connectionString: string;

  constructor(connectionString: string) {
    this.connectionString = connectionString;
  }

  public async connect(): Promise<Db> {
    try {
      Logger.info('Attempting to connect to database...');

      const client: MongoClient = await MongoClient.connect(
        this.connectionString
      );
      Logger.info('Connected!');

      return client.db();
    } catch (error) {
      Logger.error(error);

      throw error;
    }
  }
}
