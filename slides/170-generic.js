/**
 * @template T
 * @param {T} input
 * @returns {Promise<T>}
 */
function delay (input) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(input), 1000)
  })
}

const delayedNumber = await delay(42)
const delayedBoolean = await delay(true)
