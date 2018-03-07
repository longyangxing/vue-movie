<template>
  <div id="sidebar">
    <div class="sidebar-container" @click="hideNav" v-show="show">
        <div class="sidebar-verlay">
            <transition name="left-nav">
              <nav v-show="show">
                <ul>
                    <li v-for="item in listMenus">
                        <router-link :to="{name:item.href,params:{ type:item.type}}" replace>
                            <span>{{item.name}}</span>
                            <i class="icon iconfont icon-right"></i>
                        </router-link>
                    </li>
                </ul>
              </nav>
            </transition>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            let listMenus = [{
                name : '首页',
                href : 'home',
                type: ''
            },{
                name : '影片',
                href : 'flim',
                type: 'now-playing'
            }];

            return {
                listMenus: listMenus
            }

        },
        computed:{
            show:function(){
                return this.$store.getters.leftNavState;
            }
        },
        methods:{
            hideNav:function(){
                this.$store.dispatch('changeLeftNavStatus', false)
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/sidebar.scss'
</style>