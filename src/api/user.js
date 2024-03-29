import request from '@/utils/request'

export function getUserList(page) {
  return request({
    url: '/user',
    method: 'get',
    params: {
      page: page
    }
  })
}
export function postUser(form) {
  return request({
    url: '/user',
    method: 'post',
    data: form
  })
}
export function editUser(user_id,form) {
  return request({
    url: '/user/' + user_id,
    method: 'put',
    data: form
  })
}
export function deleteUser(user_id) {
  return request({
    url: '/user/' + user_id,
    method: 'delete'
  })
}
export function fetchUserDetail(user_id) {
  return request({
    url: '/user/' + user_id,
    method: 'get'
  })
}
