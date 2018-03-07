/**
 * create by sun on 2017/12/15
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import com from './module/common'
import home from './module/home'
import film from './module/film'
import detail from './module/detail'

Vue.use(Vuex)

const stores = new Vuex.Store({
    modules:{
        com,
        home,
        film,
        detail   
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default stores;