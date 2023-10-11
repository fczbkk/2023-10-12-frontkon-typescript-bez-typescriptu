enum LOG_LEVEL {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

function log(message: string, level: LOG_LEVEL) {
  console.log(`${level}: ${message}`)
}

log('this is an error', LOG_LEVEL.ERROR)
log('this is an error', 'x')
