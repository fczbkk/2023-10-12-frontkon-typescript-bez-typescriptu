/**
 * @type {'DEBUG' | 'INFO' | 'WARN' | 'ERROR'} LogLevel
 */

/**
 * @param {string} message
 * @param {LogLevel} level
 */
function log (message, level) {
  console.log(`${level}: ${message}`)
}
