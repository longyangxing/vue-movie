<template>
  <div id="detail">
    <div class="cover">
      <img :src="intro.cover.origin">
    </div>
    <div class="film-word1">
      影片简介
    </div>
    <div class="film-word2">
      <span class="title">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>&nbsp;&nbsp;&nbsp;&nbsp;{{intro.director}}
    </div>
    <div class="film-word2">
      <span class="title">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span v-for="actor in intro.actors">{{actor.name}}|</span>
    </div>
    <div class="film-word2">
      <span class="title">地区语言：</span>&nbsp;&nbsp;&nbsp;{{intro.nation}}&nbsp;&nbsp;&nbsp;&nbsp;{{intro.language}}
    </div>
    <div class="film-word2">
      <span class="title">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>&nbsp;&nbsp;&nbsp;&nbsp;{{intro.category}}
    </div>
    <div class="film-word2">
      <span class="title">上映日期：</span>&nbsp;&nbsp;&nbsp;&nbsp;{{intro.premiereAt}}
    </div>
    <div class="film-word3">
      {{intro.synopsis}}
    </div>
    <div class="operator">
      <button class="cpn-primary-button">
      立即购票
      </button>
    </div>
  </div>
</template>

<script>
   import {mapGetters} from 'vuex'
   export default {
    created:function(){
        let _this = this;
        let id = _this.$route.params.id;
        _this.$store.dispatch('getFilmDetail',id)
    },
    computed:{
      ...mapGetters({
          intro : 'intro'
      })
    },
   } 
</script>
<style lang="scss">
  @import '../assets/detail.scss'
</style>
