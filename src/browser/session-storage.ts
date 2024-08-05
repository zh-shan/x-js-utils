/**
 * 会话存储
 */
const sessionStorage = {
  /**
   * 设置存储数据
   * @param {String} key 键
   * @param {Any} value 值
   */
  set (key: string, value: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 获取存储数据
   * @param {String} key 键
   * @returns {Any}
   */
  get (key: string): any {
    const json: any = window.sessionStorage.getItem(key)
    return JSON.parse(json)
  },
  /**
   * 移除存储数据
   * @param {String} key 键
   */
  remove (key: string): void {
    window.sessionStorage.removeItem(key)
  },
  /**
   * 清除全部存储数据
   */
  clear (): void {
    window.sessionStorage.clear()
  }
}

export default sessionStorage
