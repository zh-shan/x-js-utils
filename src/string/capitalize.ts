/**
 * 首字符大写
 * @param {String} str
 * @returns {String}
 */
function capitalize (str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
