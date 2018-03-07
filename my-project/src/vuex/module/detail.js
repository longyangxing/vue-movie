/**
 * 电影详情页面状态管理
 * created by lyx on 2017/1/14
 */
import * as type from '../type'
import api from '../api'
const state = {
  intro: {}
}
const mutations = {
  [type.GETFILMDETAIL](state, data) {
    state.intro = data;
  }
}
const getters = {
    intro: state => state.intro
}
const actions = {
  getFilmDetail({commit},id) {
      api.getFilmDetail(id,function(res){
        commit(type.GETFILMDETAIL,res.data.film)
      })
  }
}
export default {
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters
}
