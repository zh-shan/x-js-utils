const RegRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/

import { RGBA } from 'typings/color'
import hexToRgb from './hex-to-rgb'

/**
 * 字符串转rgb对象
 * @param {String} str 颜色
 * @returns {Object} rgb颜色对象 { r, g, b, a }
 */
function textToRgb (str: string): RGBA {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  const color = str.replace(/ /g, '')

  const m = RegRGBA.exec(color)

  if (m === null) {
    return hexToRgb(color)
  }

  const rgb: RGBA = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10))
  }

  if (m[1]) {
    const alpha = parseFloat(m[5])
    rgb.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100
  }

  return rgb
}

export default textToRgb
