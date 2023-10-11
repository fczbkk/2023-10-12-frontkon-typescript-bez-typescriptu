/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {number} age
 */

/**
 * Type Guard for a Person.
 * @param {any} input
 * @returns {input is Person}
 */
function isPerson (input) {
  return input
    && typeof input === 'object'
    && typeof input.name === 'string'
    && typeof input.age === 'number';
}
