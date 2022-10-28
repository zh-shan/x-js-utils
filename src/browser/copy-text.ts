/**
 * 拷贝文本到粘贴板
 * @param {String} text 文本内容
 */
async function copyText (text: string) {
  // 不兼容IE
  await window.navigator.clipboard.writeText(text)
}

export default copyText

