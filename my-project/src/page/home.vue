<template>
    <div id="home">
        <div class="banner">
            <swiper :options="swiperOption" class="banner-swiper">
                <swiper-slide v-for="item in banner" :key="item.id" class="slide">
                    <a target='_blank' :href="item.url">
						<img :src="item.imageUrl" alt="">
					</a>
                </swiper-slide>
            </swiper>
        </div>
        
        <div class="now-playing">
            <div class="item" v-for="item in nowPlayList">
                <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.cover.origin" alt="">
                    <div class="item-footer">
                        <div class="desc">
                            <h4>{{item.name}}</h4>
                            <p class="info">{{item.cinemaCount}}家电影院上映 {{item.watchCount}}人购票</p>
                        </div>
                        <div class="count">{{item.grade}}</div>
                    </div>
                </router-link>
            </div>
            <router-link :to="{name:'flim',params:{type:'now-playing'}}" class="go-more">
                    更多热映电影
            </router-link>       
        </div>
        <div class="comming-title">
            <div>即将上映</div>
        </div>
        <div class="comming-soon">
            <div class="item" v-for="item in commingList">
                <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.cover.origin" alt="">
                    <div class="item-footer">
                        <div class="desc">
                            <h4>{{item.name}}</h4>
                            <p class="info">{{item.cinemaCount}}家电影院上映 {{item.watchCount}}人购票</p>
                        </div>
                        <div class="count">{{item.grade}}</div>
                    </div>
                </router-link>
            </div>
            <router-link :to="{name:'flim',params:{type:'comming-soon'}}" class="go-more">
                    更多即将电影
            </router-link>      
        </div>
    </div>
</template>
<script>
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import {mapGetters} from 'vuex'
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data(){
            return {
                data:{

                },
                swiperOption:{
                   autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                }
            }
        },
        created:function(){
            //获取banner
            if(this.banner.length <= 0 ){
                this.$store.dispatch('getBannerList')
            }
            //获取热映电影
            if(this.nowPlayList.length <=0){
                this.$store.dispatch('getNowPlaying')
            }
            //获取即将上映电影
            if(this.commingList.length <= 0){
                this.$store.dispatch('getCommingSoon')
            }
        },
        computed:{
            ...mapGetters({
                banner : 'bannerList',
                nowPlayList : 'nowPlayingList',
                commingList : 'comingSoonList'
            })
        },
        components:{
           swiper,swiperSlide
        }
    }    
</script>
<style lang="scss">
    @import '../assets/home.scss';
</style>