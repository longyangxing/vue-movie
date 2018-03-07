import * as type from '../type'
import api from '../api'

const state = {
    banner : [],
    nowPlaying: [],
    commingList: []
}

const mutations = {
    [type.GET_BANNER_LIST](state,data){
        state.banner = data;
    },
    [type.GET_NOW_PLAYING_LIST](state,data){
        state.nowPlaying = data;
    },
    [type.GET_COMMING_SOON_LIST](state, data) {
        state.commingList = data;
    },
} 

const getters = {
    bannerList: state => state.banner,
    nowPlayingList: state => state.nowPlaying,
    comingSoonList: state => state.commingList
}

const actions = {
    getBannerList({commit}){
        api.getBannerList(function(res){
          commit(type.GET_BANNER_LIST,res.data.billboards)
        })
    },
    getNowPlaying({commit}){
        api.getNowPlaying(function(res){
          commit(type.GET_NOW_PLAYING_LIST,res.data.films)
        })
    },
    getCommingSoon({commit}){
        api.getCommingSoon(function(res){
            commit(type.GET_COMMING_SOON_LIST, res.data.films)
        })
    }
}


export default{
    actions : actions,
    getters : getters,
    mutations : mutations,
    state : state
}