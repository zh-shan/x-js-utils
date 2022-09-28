/**
 * 从指定长度处截断字符串
 * @param {String} str
 * @param {Number} length
 * @returns {String}
 */
function truncate (str: string, length: number): string {
  return str.length < length ? str : `${str.slice(0, length)}...`
}

export default truncate
