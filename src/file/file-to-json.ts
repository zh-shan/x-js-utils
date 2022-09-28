/**
 * 将blob对象转化为json
 * @param {Stream} data 文件内容
 * @returns {Promise}
 */
function fileToJson (data: BlobPart): Promise<any> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result // 得到字符串
      const data = JSON.parse(<string>result) // 解析成json对象
      resolve(data)
    }

    // 失败回调
    reader.onerror = err => {
      reject(err)
    }

    // 按照utf-8编码解析
    reader.readAsText(new Blob([data]), 'utf-8')
  })
}

export default fileToJson
