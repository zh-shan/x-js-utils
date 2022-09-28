import textToRgb from './text-to-rgb'
import rgbToString from './rgb-to-string'

/**
 * 改变颜色透明度
 * @param {String} color 颜色
 * @param {Number} offset 透明度 [0, 1]
 * @returns {String} 颜色
 */
function changeAlpha (color: string, offset: number): string {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }

  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new TypeError('Expected offset to be between -1 and 1')
  }

  const { r, g, b, a } = textToRgb(color)
  const alpha = a !== void 0 ? a / 100 : 0

  return rgbToString({
    r, g, b, a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100)
  })
}

export default changeAlpha
