/**
 * 判断是否为外部链接
 * @param {string} path
 * @returns {Boolean}
 */
function isExternal (path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default isExternal
