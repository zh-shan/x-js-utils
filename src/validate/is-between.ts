/**
 * 判断是否在区间内
 * @param {Number} value
 * @param {Number} start
 * @param {Number} end
 * @returns {Boolean}
 */
function isBetween (value: number, start: number, end: number): boolean {
  const min = Math.min(start, end)
  const max = Math.max(start, end)
  return value >= min && value <= max
}

export default isBetween
