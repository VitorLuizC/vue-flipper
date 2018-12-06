/**
 * Curries a predicate function to check if value matches pattern.
 * @param {RegExp} pattern
 * @returns {(value: string) => boolean}
 */
const isPattern = (pattern) => (value) => pattern.test(value);

/**
 * Check if value is a CSS Length.
 */
export const isCSSLength = isPattern(/^\+?(\d*\.)?\d+(em|ex|ch|rem|vh|vw|vmin|vmax|px|mm|cm|in|pt|pc|%)$/i);

/**
 * Check if value is a CSS Time.
 */
export const isCSSTime = isPattern(/^\+?(\d*\.)?\d+(ms|s)$/i);
