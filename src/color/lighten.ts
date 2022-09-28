import textToRgb from './text-to-rgb'

/**
 * 调整亮度
 * @param {String} color 颜色
 * @param {Number }percent 亮度 [-100, 100]
 * @returns {String} 十六进制颜色
 */
function lighten (color: string, percent: number): string {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }

  if (typeof percent !== 'number') {
    throw new TypeError('Expected a numeric percent')
  }

  const rgb = textToRgb(color)
  const t = percent < 0 ? 0 : 255
  const p = Math.abs(percent) / 100
  const R = rgb.r
  const G = rgb.g
  const B = rgb.b

  return '#' + (
    0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  ).toString(16).slice(1)
}

export default lighten
