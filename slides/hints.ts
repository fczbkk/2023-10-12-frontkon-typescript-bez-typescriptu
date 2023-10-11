/**
 * Adds two numbers or strings.
 *
 * @example
 * add(1, 2); // 3
 * add('1', '2'); // '12'
 */
function add(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' || typeof b === 'string') {
    return String(a) + String(b);
  }
  return a + b;
}

/**
 * Subtracts two numbers.
 * Can only work with numbers, which makes it different from {@link add} function.
 */
function subtract(a: number, b: number): number {
  return a - b;
}
