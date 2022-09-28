/**
 * 校验小写字符串
 * @param {string} str
 * @returns {Boolean}
 */
function validLowerCase (str: string): boolean {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

export default validLowerCase
