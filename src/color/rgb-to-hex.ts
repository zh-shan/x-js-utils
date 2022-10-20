import { RGBA } from 'typings/color'

/**
 * rgb对象转十六进制
 * @param {Object} param rgb颜色对象 { r, g, b, a }
 * @returns {String} 颜色
 */
function rgbToHex ({ r, g, b, a }: RGBA): string {
  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  if (
    r > 255 ||
    g > 255 ||
    b > 255 ||
    a !== void 0 && a > 100
  ) {
    throw new TypeError('Expected 3 numbers below 256 (and optionally one below 100)')
  }

  const alpha = a !== void 0
    ? (Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1)
    : ''

  return '#' + (b | g << 8 | r << 16 | 1 << 24).toString(16).slice(1) + alpha
}

export default rgbToHex
