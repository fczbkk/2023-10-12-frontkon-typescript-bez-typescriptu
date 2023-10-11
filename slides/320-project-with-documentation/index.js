/**
 * Adds two numbers or strings.
 * @param {string | number} a
 * @param {string | number} b
 * @returns {string | number}
 *
 * @example
 * add(1, 2); // 3
 * add('1', '2'); // '12'
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts two numbers.
 * Can only work with numbers, which makes it different from {@link add} function.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  return a - b;
}
