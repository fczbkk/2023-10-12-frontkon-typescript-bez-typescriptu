/**
 * @typedef {import('./typedefs.js').LogLevel} LogLevel
 */

/**
 * Output message and level indicator into the console.
 * @param {string} message
 * @param {LogLevel} level
 */
function log(message, level) {
  console.log(`${level}: ${message}`)
}


log('this is an error', 'ERROR')
log('this is an error', 'xxx')
