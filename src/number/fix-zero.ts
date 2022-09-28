/**
 * 数值补零
 * @param {Number} number 数值
 * @param {Number} length 长度
 * @param {String} pos 位置, prefix-前, suffix-后
 * @returns {String}
 */
function fixZero (number: number, length: number, pos = 'prefix'): string {
  if (!number) {
    return ''
  }

  const zeros = new Array(4).fill(0).join('')
  if (pos === 'prefix') {
    return (zeros + number).slice(-length)
  } else {
    return (number + zeros).slice(0, length)
  }
}

export default fixZero
