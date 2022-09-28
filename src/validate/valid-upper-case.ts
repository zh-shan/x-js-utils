/**
 * 校验大写字符串
 * @param {string} str
 * @returns {Boolean}
 */
function validUpperCase (str: string): boolean {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

export default validUpperCase

