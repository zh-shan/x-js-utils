// 解析时间格式的正则
const parseRegExp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
// 格式化内容的正则
const formatRegExp = /D{1,2}|H{1,2}|m{1,2}|s{1,2}/g

/**
 * 解析日期格式
 * @param {String|Date} date 日期
 * @param {Boolean} utc 日期
 * @returns {Date} 解析后的日期
 */
function parseDate (date: string|Date, utc = false): Date {
  if (date === null) {
    return new Date(NaN)
  }

  if (date === undefined) {
    return new Date()
  }

  if (date instanceof Date) {
    return new Date(date)
  }

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const matcher = date.match(parseRegExp)

    if (matcher) {
      const [, year, month, date, hours, minutes, seconds, zone] = matcher

      const millisecond = Number((zone || '0').substring(0, 3))

      if (utc) {
        return new Date(Date.UTC(Number(year), Number(month) - 1 || 0, Number(date) || 1, Number(hours) || 0, Number(minutes) || 0, Number(seconds) || 0, millisecond))
      }

      return new Date(Number(year), Number(month) - 1 || 0, Number(date) || 1, Number(hours) || 0, Number(minutes) || 0, Number(seconds) || 0, millisecond)
    }
  }

  return new Date(date)
}

/**
 * 距离某个时间的倒计时
 * @param {string} endtime 终点时间
 * @param {String} format 格式化输出, D-天\H-小时\m-分钟\s-秒
 * @returns {String} 倒计时
 */
function countDown (endtime: string|Date, format = '倒计时:D天H小时m分s秒'): string {
  const now = Date.now() // 开始时间，当前时间
  const end = parseDate(endtime).getTime() // 结束时间，需传入时间参数

  const time = end - now // 时间差的毫秒数

  let day = 0
  let hour = 0
  let minute = 0
  let second = 0

  if (time >= 0) {
    day = Math.floor(time / 1000 / 3600 / 24)
    hour = Math.floor(time / 1000 / 60 / 60 % 24)
    minute = Math.floor(time / 1000 / 60 % 60)
    second = Math.floor(time / 1000 % 60)
  }

  const result = format.replace(formatRegExp, (match) => {
    switch (match) {
      case 'D':
      case 'DD':
        return `${day}`
      case 'H':
      case 'HH':
        return `${hour}`
      case 'm':
      case 'mm':
        return `${minute}`
      case 's':
      case 'ss':
        return `${second}`
      default:
        return match
    }
  })

  return result
}

export default countDown
