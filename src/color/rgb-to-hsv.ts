import { HSVA, RGBA } from '../../types/color'

/**
 * rgb对象转hsv对象
 * @param {Object} param rgb颜色对象 { r, g, b, a }
 * @returns {Object} hsv颜色对象 { h, s, v, a }
 */
function rgbToHsv ({ r, g, b, a }: RGBA): HSVA {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min
  const s = max === 0 ? 0 : d / max
  const v = max / 255

  let h = 0

  // eslint-disable-next-line default-case
  switch (max) {
    case min:
      h = 0
      break
    case r:
      h = (g - b + d * (g < b ? 6 : 0)) / (6 * d)
      break
    case g:
      h = (b - r + d * 2) / (6 * d)
      break
    case b:
      h = (r - g + d * 4) / (6 * d)
      break
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  }
}

export default rgbToHsv
