/**
 * 通用状态
 * create by sun on 2017/12/15
 */

 import * as type from '../type'

 const state = {
    leftNavState: false
 }

 const mutations = {
    [type.CHANGE_LEFT_NAV_STATE](state,status){
        state.leftNavState = status;
    }
 }

 const getters = {
    leftNavState : state => state.leftNavState
 }

 const actions = {
    changeLeftNavStatus({commit},status){
        commit(type.CHANGE_LEFT_NAV_STATE,status)
    }
 }

 export default {
     state : state,
     mutations: mutations,
     actions: actions,
     getters: getters
 }