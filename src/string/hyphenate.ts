/**
 * 小驼峰转连接线
 * @param {String} str
 * @returns {String}
 */
function hyphenate (str: string): string {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

export default hyphenate
