import service from '@/assets/js/request'

export function login (data) {
  service.request({
    method: 'post',
    url: '/login',
    headers: { 'content-type': 'application/json' },
    data
  })
}
