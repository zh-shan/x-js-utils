const localStorage = {
  // 设置永久缓存
  set (key: string, val: any): void {
    window.localStorage.setItem(key, JSON.stringify(val))
  },
  // 获取永久缓存
  get (key: string): any {
    const json: any = window.localStorage.getItem(key)
    return JSON.parse(json)
  },
  // 移除永久缓存
  remove (key: string): void {
    window.localStorage.removeItem(key)
  },
  // 移除全部永久缓存
  clear (): void {
    window.localStorage.clear()
  }
}

export default localStorage
