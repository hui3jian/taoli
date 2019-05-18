import wepy from 'wepy'

const BASE_URL = 'http://www.niuduxiu.com/'
const DATA_TYPE = 'json'  // 如果设为json，会尝试对返回的数据做一次 JSON.parse

const request = (type, params) => {
  return new Promise((resolve, reject) => {
    wepy.request({
      ...params,
      url: BASE_URL + params.url,
      method: type,
      dataType: DATA_TYPE,
      header: params.header || { 'Content-Type': 'application/json' },
      success: res => {
        if (res.statusCode === 200) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail: res => {
        reject(res)
      },
      complete: () => {
      }
    })
  })
}

export default {
  get: (url, data, header = {}) => { return request('get', {url, data, header}) },
  post: (url, data, header = {}) => { return request('post', {url, data, header}) }
}
