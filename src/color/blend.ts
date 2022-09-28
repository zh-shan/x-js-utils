import { RGBA } from '../../types/color'
import rgbToHex from './rgb-to-hex'
import textToRgb from './text-to-rgb'

type RGBColor = string|RGBA

/**
 * 颜色混合
 * @param {String} fgColor 前景色
 * @param {String} bgColor 后景色
 * @returns {String} 混合后颜色
 */
function blend (fgColor: RGBColor, bgColor: RGBColor): RGBColor {
  if (typeof fgColor !== 'string' && (!fgColor || fgColor.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b[, a]} object as fgColor')
  }

  if (typeof bgColor !== 'string' && (!bgColor || bgColor.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b[, a]} object as bgColor')
  }

  const rgb1: RGBA = typeof fgColor === 'string' ? textToRgb(fgColor) : fgColor
  const r1 = rgb1.r / 255
  const g1 = rgb1.g / 255
  const b1 = rgb1.b / 255
  const a1 = rgb1.a !== void 0 ? rgb1.a / 100 : 1

  const rgb2: RGBA = typeof bgColor === 'string' ? textToRgb(bgColor) : bgColor
  const r2 = rgb2.r / 255
  const g2 = rgb2.g / 255
  const b2 = rgb2.b / 255
  const a2 = rgb2.a !== void 0 ? rgb2.a / 100 : 1

  const a = a1 + a2 * (1 - a1)
  const r = Math.round((r1 * a1 + r2 * a2 * (1 - a1)) / a * 255)
  const g = Math.round((g1 * a1 + g2 * a2 * (1 - a1)) / a * 255)
  const b = Math.round((b1 * a1 + b2 * a2 * (1 - a1)) / a * 255)

  const ret = { r, g, b, a: Math.round(a * 100) }

  return typeof fgColor === 'string' ? rgbToHex(ret) : ret
}

export default blend
