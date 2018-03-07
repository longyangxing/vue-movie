<template>
  <div id="wrap">
    <com-header></com-header>
    <div class="container">
       <router-view></router-view>
    </div>
    <com-sidebar></com-sidebar>
    <div class="footer"></div>
  </div>
</template>

<script>
  import Header from './components/header'
  import Sidebar from './components/sidebar'
  export default {
    data(){
      return { aaa: 12}
    },
    components:{
      comHeader : Header,
      comSidebar : Sidebar
    },
    created:function(){
      this.$router.replace('home')
    }
  }
</script>
<style lang="scss">
  @import './assets/reset.scss';
  @import './assets/index.scss';
</style>

