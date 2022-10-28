/**
 * 随机生成十六进制颜色值
 * @returns {String} 颜色
 */
function randomHex (): string {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`
}

export default randomHex
