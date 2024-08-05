/**
 * 本地缓存
 */
const localStorage = {
  /**
   * 设置缓存数据
   * @param {String} key 键
   * @param {Any} value 值
   */
  set (key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 获取缓存数据
   * @param {String} key 键
   * @returns {Any}
   */
  get (key: string): any {
    const json: any = window.localStorage.getItem(key)
    return JSON.parse(json)
  },
  /**
   * 移除缓存数据
   * @param {String} key 键
   */
  remove (key: string): void {
    window.localStorage.removeItem(key)
  },
  /**
   * 移除全部缓存
   */
  clear (): void {
    window.localStorage.clear()
  }
}

export default localStorage
