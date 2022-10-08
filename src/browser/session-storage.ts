const sessionStorage = {
  // 设置临时缓存
  set (key: string, val: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  },
  // 获取临时缓存
  get (key: string): any {
    const json: any = window.sessionStorage.getItem(key)
    return JSON.parse(json)
  },
  // 移除临时缓存
  remove (key: string): void {
    window.sessionStorage.removeItem(key)
  },
  // 移除全部临时缓存
  clear (): void {
    window.sessionStorage.clear()
  }
}

export default sessionStorage
