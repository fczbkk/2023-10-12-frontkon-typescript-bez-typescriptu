/**
 * @typedef {{name: string, age: number}} Person
 */

/**
 * @typedef {Person & {hatesJquery: boolean}} Developer
 */

const me = /** @type {Developer} */ ({
  name: 'Riki',
  age: Number.POSITIVE_INFINITY,
  hatesJquery: true
})
