/**
 * api 接口
 * create by sun 2017/12/16
 */

import axios from 'axios'

let url = 'https://bird.ioliu.cn/v1/?url=http://m.maizuo.com/v4/api/';

let func_axios = (api, cb) => {
  axios.get(api).then(function (res) {
    if (res.status >= 200 && res.status < 300) {
      cb(res.data)
    }
  }).catch((error) => {
    return Promise.reject(error)
  })
}

export default {
  /**
   * 根据请求的时间戳获取banner
   */
  getBannerList: (cb) => func_axios(url + 'billboard/home?t=' + new Date() * 1, cb),
  /**
   * 获取首页热映电影
   */
  getNowPlaying: (cb) => func_axios(url + 'film/now-playing?_t=' + new Date() * 1 + '&page=1&count=5', cb),

  /**
   * 获取即将上映电影
   */
  getCommingSoon: (cb) => func_axios(url + 'film/coming-soon?_t=' + new Date() * 1 + '&page=1&count=3', cb),

  /**
   * 获取更多热映映电影
   */
  getMorePlayingNow: (page, cb) => func_axios(url + 'film/now-playing?page=' + page + '&count=7', cb),

  getMoreCommingSoon: (page, cb) => func_axios(url + 'film/coming-soon?page=' + page + '&count=7', cb),

  getFilmDetail: (id, cb) => func_axios(url + 'film/' + id + '?__t=' + new Date() * 1,cb)

}
