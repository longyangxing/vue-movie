<template>
  <div id="film" v-scroll="getMore">
    <div class="tab">
      <div class="chose-tab" :class="{active:type=='now-playing'}" @click="toggleTab('now-playing')">正在热映</div>
      <div class="chose-tab" :class="{active:type=='comming-soon'}" @click="toggleTab('comming-soon')">即将上映</div>
    </div>
    <div class="tab-content">
      <transition-group tag="div" name="playing-now-list" v-if="type=='now-playing'">
        <router-link class="film-list-item" v-for="item in PlayingNowList" :key="item.id" :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.poster.thumbnail">
          <div class="film-dec">
            <div class="film-name-content">
              <div class="film-name">{{item.name}}</div>
              <div class="count">{{item.grade}}</div>
            </div>
            <p class="film-intro">{{item.intro}}</p>
            <p class="film-count">
              <span class="film-count-color1">{{item.scheduleCount}}</span>家电影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="film-count-color1">{{item.watchCount}}</span>人购票
            </p>
          </div>
        </router-link>
      </transition-group>
      <transition-group tag="div" name="comming-soon-list" v-if="type=='comming-soon'">
        <router-link class="film-list-item" v-for="item in CommingSoonList" :key="item.id" :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.poster.thumbnail">
          <div class="film-dec">
            <div class="film-name-content">
              <div class="film-name">{{item.name}}</div>
              <div class="count">{{item.grade}}</div>
            </div>
            <p class="film-intro">{{item.intro}}</p>
            <p class="film-count">
              <span class="film-count-color1">{{item.scheduleCount}}</span>家电影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="film-count-color1">{{item.watchCount}}</span>人购票
            </p>
          </div>
        </router-link>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        type: ''
      }
    },
    created:function(){
      var _this = this;
      document.scrollTop = 0;
      _this.type = _this.$route.params.type;
      if(_this.type == 'now-playing' && this.PlayingNowList.length == 0){
        this.$store.dispatch('getFilmNowPlaying');
      }
    },
    computed:{
      ...mapGetters({
          PlayingNowList : 'filmNowPlayingList',
          CommingSoonList: 'filmCommingList',
      })
    },
    methods:{
      toggleTab:function(type){
        var _this = this;
        if(type == _this.type){
          return;
        }
        _this.type = type;
        _this.$router.replace(_this.type)
        if(_this.type == 'now-playing' && this.PlayingNowList.length == 0){
           this.$store.dispatch('getFilmNowPlaying');
        } else if(_this.type == 'comming-soon' && this.CommingSoonList.length == 0){
          this.$store.dispatch('getFilmCommingSoon')
        }
      },
      getMore:function(el){ 
        if(document.body.scrollTop + window.innerHeight >= el.clientHeight){
          if(this.type == 'now-playing'){
            this.$store.dispatch('getFilmNowPlaying');
          }else{
            this.$store.dispatch('getFilmCommingSoon')
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/film.scss';
</style>
