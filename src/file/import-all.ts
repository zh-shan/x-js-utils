interface Mapping {
  [key: string]: any
}

/**
 * 导入所有
 * @param {Context} context
 * @param {Function} callback 回调函数
 * @returns {Object}
 */
function importAll (context: any, callback: (key: string, value: any) => string): Mapping {
  const mapping: Mapping = {}

  for (const key of context.keys()) {
    let name = key

    const value = context(key).default || context(key)

    if (callback) {
      name = callback(key, value)
    }

    mapping[name] = value
  }

  return mapping
}

export default importAll
