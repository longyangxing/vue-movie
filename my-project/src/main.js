/**
 * create by Lyx 2017.12.13
 * main
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import './config/base.config';
import store from './vuex/index';
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('scroll', {
  bind: function (el, binding) {
    window.addEventListener('scroll', () => {
      let func = binding.value;
      func(el)
    })
  }
})
const app = new Vue({
  router,
  store
}).$mount('#app')
