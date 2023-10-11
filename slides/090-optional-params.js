/**
 * @param {string} message
 * @param {string} [level]
 */
function log (message, level = 'info') {
  console.log(`${level ?? 'info'}: ${message}`)
}
