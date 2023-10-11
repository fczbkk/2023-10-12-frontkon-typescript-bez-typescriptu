enum LOG_LEVEL {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

function log(message: string, level: LOG_LEVEL) {
  console.log(`${level}: ${message}`)
}

log('this is an error', LOG_LEVEL.ERROR)
log('this is an error', 'ERROR')
log('this is an error', 'x')
