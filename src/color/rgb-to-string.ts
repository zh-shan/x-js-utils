import { RGBA } from 'typings/color'

/**
 * rgb对象转字符串
 * @param {Object} param rgb颜色对象 { r, g, b, a }
 * @returns {String} 颜色
 */
function rgbToString ({ r, g, b, a }: RGBA): string {
  return `rgb${a !== void 0 ? 'a' : ''}(${r},${g},${b}${a !== void 0 ? ',' + a / 100 : ''})`
}

export default rgbToString
