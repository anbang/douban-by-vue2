import jsonp from '@/assets/js/jsonp'
// import axios from 'axios'
import { homeParams } from './config'

export function getHomeData (otherData) {
  const url = 'https://m.douban.com/rexxar/api/v2/recommend_feed'
  const data = Object.assign({}, homeParams, otherData !== undefined ? otherData : {})
  return jsonp(url, data)
}
