/**
 * 保存文件
 * @param {String|Stream} data 文件内容
 * @param {String} filename 文件名
 */
function saveFile (data: BlobPart, filename: string) {
  const blob = new Blob([data])

  const navigator = (window.navigator as any)
  if (navigator.msSaveOrOpenBlob) {
    // 兼容IE 10
    navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    link.download = filename
    link.href = URL.createObjectURL(blob)
    link.click()
    URL.revokeObjectURL(link.href)
  }
}

export default saveFile
