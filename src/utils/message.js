import { Message } from 'element-ui'

export function resMessage(data, { successMsg, errorMsg } = {}) {
  if (data.message) {
    Message({
      message: successMsg || '操作成功',
      type: 'success'
    })
  } else {
    Message({
      message: errorMsg || '操作失败',
      type: 'error'
    })
  }
}
