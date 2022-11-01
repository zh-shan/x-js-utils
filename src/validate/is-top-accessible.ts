/**
 * 判断 window.top 是否能使用
 * @returns {Boolean}
 */
function isTopAccessible (): boolean {
  try {
    window.top?.location
    return true
  } catch (err) {
    return false
  }
}

export default isTopAccessible
