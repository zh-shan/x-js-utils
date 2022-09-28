/**
 * 连接线转驼峰
 * @param {String} str
 * @returns {String}
 */
function camelize (str: string): string {
  return str.replace(/-(\w)/g, function (all, letter) { return letter ? letter.toUpperCase() : '' })
}

export default camelize
