import request from '@/utils/request'
function translateData(data = {}) {
  const fd = new FormData()
  Object.keys(data).forEach(item => {
    if (data[item] != null) {
      fd.append(item, data[item])
    }
  })
  return fd
}

export function postXhr(url, data, config = {}) {
  return request({
    baseURL: process.env.VUE_APP_BASE_INTERFACE,
    url: url,
    method: 'post',
    data: translateData(data)
  })
}

export function getXhr(url, data, config = {}) {
  return request({
    baseURL: process.env.VUE_APP_BASE_INTERFACE,
    url: url,
    method: 'get',
    params: data
  })
}
