/**
 * 更多电影
 * created by lyx on 2017/1/12
 */
import * as type from '../type'
import api from '../api'

const state = {
    filmNowPlayingList: [],
    filmCommingList: [],
    nowPage:0,
    comPage:0,
    canGetNow: true,
    canGetCom: true
}

const mutations = {
    [type.FILM_NOWPLAYING_LIST](state, data) {
        state.filmNowPlayingList = state.filmNowPlayingList.concat(data.films);
        state.canGetNow = state.nowPage > data.page.total ? false : true;   
    },
    [type.FILM_COMINGSOON_LIST](state, data) {
        state.filmCommingList = state.filmCommingList.concat(data.films);
        state.canGetCom = state.comPage > data.page.total ? false : true;   
    },
    [type.NOWPAGE](state) {
        state.nowPage += 1;
    },
    [type.COMPAGE](state){
        state.comPage +=1;
    }
}

const getters = {
    filmNowPlayingList: state => state.filmNowPlayingList,
    filmCommingList: state => state.filmCommingList,
}

const actions = {
    getFilmNowPlaying({ commit }) {
        if (state.canGetNow){
            commit(type.NOWPAGE)
            api.getMorePlayingNow(state.nowPage,function (res) {    
                commit(type.FILM_NOWPLAYING_LIST, res.data)
            })
        }
      
    },
    getFilmCommingSoon({commit}){
        commit(type.COMPAGE)
        if(state.canGetCom){
            api.getMoreCommingSoon(state.comPage,function (res) {
                commit(type.FILM_COMINGSOON_LIST, res.data)
            })
        }
    }
}


export default {
    actions: actions,
    getters: getters,
    mutations: mutations,
    state: state
}