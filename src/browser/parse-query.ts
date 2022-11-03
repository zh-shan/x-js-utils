type LocationQuery = Record<string, any>

/**
 * 解析URl的search参数
 * @param {String} search
 * @returns {LocationQuery}
 */
function parseQuery (search: string): LocationQuery {
  const query: LocationQuery = {}

  if (search === '' || search === '?') {
    return query
  }

  const hasLeadingIM = search[0] === '?'

  const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&')

  for (let i = 0; i < searchParams.length; ++i) {
    // pre decode the + into space
    const searchParam = searchParams[i].replace(/\+/g, ' ')
    const eqPos = searchParam.indexOf('=')

    const key = decodeURIComponent(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos))
    const value = eqPos < 0 ? null : decodeURIComponent(searchParam.slice(eqPos + 1))

    if (key in query) {
      let currentValue = query[key]

      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue]
      }

      currentValue.push(value)
    } else {
      query[key] = value
    }
  }
  return query
}

export default parseQuery
