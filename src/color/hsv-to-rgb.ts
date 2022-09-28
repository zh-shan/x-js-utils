import { HSVA, RGBA } from '../../types/color'

/**
 * hsv对象转rgb对象
 * @param {Object} param hsv颜色对象 { h, s, v, a }
 * @returns {Object} rgb颜色对象 { r, g, b, a }
 */
function hsvToRgb ({ h, s, v, a }: HSVA): RGBA {
  let r, g, b

  s = s / 100
  v = v / 100
  h = h / 360

  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
    default:
      break
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a
  }
}

export default hsvToRgb
