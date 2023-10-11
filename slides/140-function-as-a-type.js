/**
 * @typedef {function (string): string} StringTransformer
 */

/** @type {StringTransformer} */
const toUpperCase = (str) => str.toUpperCase();

/** @type {StringTransformer} */
const toReversed = (str) => str.split('').reverse().join('');
