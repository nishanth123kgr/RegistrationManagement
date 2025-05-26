// logger.js
const { createLogger, format, transports } = require('winston');
const path = require('path');

// Configure logger based on environment
const loggerTransports = [new transports.Console()];

// Only add file transport in development
if (process.env.NODE_ENV !== 'production') {
  loggerTransports.push(
    new transports.File({ filename: path.join(__dirname, 'logs', 'app.log') })
  );
}

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'error' : 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}`;
    })
  ),
  transports: loggerTransports
});

module.exports = logger;
