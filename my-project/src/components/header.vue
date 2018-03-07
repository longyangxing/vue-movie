<template>
  <div id="header">
    <a class="go-menu" @click="showNav"><i class="icon iconfont icon-createtask_fill"></i></a>
    <div class="title"><p>卖座电影</p><a>广州<i class="icon iconfont icon-unfold"></i></a></div>
    <a class="go-mine"><i class="icon iconfont icon-people_fill"></i></a>
  </div>
</template>
<script>
  import  '../assets/icon/iconfont.css';
  
  export default {
    data(){
      return {

      }
    },
    methods:{
      showNav:function(){
        this.$store.dispatch('changeLeftNavStatus',true)
      }
    }
  }
</script>
<style lang="sass">
  @import '../assets/header.scss';
</style>