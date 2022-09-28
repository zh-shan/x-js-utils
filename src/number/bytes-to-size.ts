/**
 * 字节单位换算
 * @param {Number} bytes 字节
 * @returns {String}
 */
function bytesToSize (bytes: number): string {
  if (bytes === 0) {
    return '0 B'
  }
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  // Math.log() 返回数字的自然对数 log(b)/log(a)=loga(b)) 换底公式 log以a为底b的对数
  // Math.floor(x) -- 向下取整，返回小于或等于x的值
  // Math.pow(x,y) -- 返回以x的y次幂，等同于x^y的数值表达式
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i]
}

export default bytesToSize
