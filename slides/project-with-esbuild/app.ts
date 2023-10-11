const LOG_LEVEL = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
} as const

type ObjectValues<T> = T[keyof T]

type LogLevel = ObjectValues<typeof LOG_LEVEL>

function log(message: string, level: LogLevel) {
  console.log(`${level}: ${message}`)
}

log('this is an error', LOG_LEVEL.ERROR)
log('this is an error', 'ERROR')
log('this is an error', 'x')
