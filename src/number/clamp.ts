/**
 * 限制数据范围
 * 小于最小值时就返回最小值
 * 大于最大值时就返回最大值
 * @param {Number} val 数值
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @return {Number}
 */
function clamp (val: number, min: number, max: number): number {
  if (val < min) {
    return min
  } else if (val > max) {
    return max
  }

  return val
}

export default clamp
