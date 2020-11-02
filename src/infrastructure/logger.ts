import winston = require('winston');
import appRoot = require('app-root-path');

const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'node-api-service-skeleton' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`.
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File(
      { filename: `${appRoot}/logs/error.log`, level: 'error' }
    ),
    new winston.transports.File(
      { filename: `${appRoot}/logs/combined.log` }
    )
  ]
});

// Add some color if we're not in production
if (process.env.NODE_ENV !== 'production') {
  Logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

export default Logger;
