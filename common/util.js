export const brandObject = {
  tdk: 'TDK',
  murata: '村田',
  taiyo: '太诱',
  pdc: '信昌',
  walsin: '华科',
  yageo: '国巨',
  hec: '禾伸堂',
  fh: '风华',
  samsung: '三星'
}

export const productGradeObject = {
  automotive: '汽车级',
  commercial: '普通商用级',
  'safety standard': '高性能安全规格级'
}

export const menuList = [
  { name: 'TDK', url: '/tdk' },
  { name: '村田', url: '/murata' },
  { name: '太诱', url: '/taiyo' },
  { name: '信昌', url: '/pdc' },
  { name: '华科', url: '/walsin' },
  { name: '国巨', url: '/yageo' },
  { name: '禾伸堂', url: '/hec' },
  { name: '风华', url: '/fh' }
]

export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
