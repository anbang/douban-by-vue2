import jsonp from '@/assets/js/jsonp'

export function getMovieHotData () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items'
  const data = {
    os: 'ios',
    start: 0,
    count: 8,
    loc_id: 108288,
    _: 1499652803385
  }
  return jsonp(url, data)
}

export function getMovieFreeData () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items'
  const data = {
    os: 'ios',
    start: 0,
    count: 8,
    loc_id: 108288,
    _: 1499652803386
  }
  return jsonp(url, data)
}

export function getMovieLatestData () {
  const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items'
  const data = {
    os: 'ios',
    start: 0,
    count: 8,
    loc_id: 108288,
    _: 1499652803386
  }
  return jsonp(url, data)
}
