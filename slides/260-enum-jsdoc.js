/**
 * @typedef {'DEBUG' | 'INFO' | 'WARN' | 'ERROR'} LogLevel
 */

/**
 * @readonly
 * @enum {LogLevel}
 */
const LOG_LEVEL = Object.freeze({
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
})

/**
 * Output message and level indicator into the console.
 * @param {string} message
 * @param {LogLevel} level
 */
function log(message, level) {
  console.log(`${level}: ${message}`)
}


log('this is an error', LOG_LEVEL.ERROR)
log('this is an error', 'ERROR')
log('this is an error', 'xxx')
