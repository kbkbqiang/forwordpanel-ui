import request from '@/utils/request'
import FormData from 'form-data'

export function exportData(data) {
  return request({
    url: '/system/exportData',
    method: 'get',
    params: data
  })
}

/**
 * 文件上传
 */
export function importData(fileobj) {
  const param = new FormData()
  param.append('file', fileobj.file)
  return request({
    method: 'post',
    url: '/system/importData',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: param
  })
}

export function saveConfig(data) {
  return request({
    url: '/sysConfig/save',
    method: 'post',
    data
  })
}

export function getConfig(data) {
  return request({
    url: '/sysConfig/getSysConfig',
    method: 'get',
    params: data
  })
}

