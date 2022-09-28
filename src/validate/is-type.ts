/**
 * 判断是否为某种类型
 * @param {*} value
 * @param {String} type
 * @returns {Boolean}
 */
function isType (value: any, type: string): boolean {
  return Object.prototype.toString.call(value) === '[object ' + type + ']'
}

export default isType
