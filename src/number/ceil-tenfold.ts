/**
 * 向上取最近的十倍数
 * @description 如 11->20, 145->200, 675->700, 1345->2000
 * @param {Number} num 数值
 */
function ceilTenfold (num: number): number {
  if (typeof num !== 'number') {
    return 0
  }

  num = Math.max(0, num)

  const radix = Math.pow(10, Math.max(1, Math.floor(Math.log10(num))))

  return Math.ceil(num / radix) * radix
}

export default ceilTenfold
