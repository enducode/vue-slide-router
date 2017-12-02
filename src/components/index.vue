<template>
    <div class="main">
        <div class="page-tab">
            <div 
                :class="nowPath == item.to ? 'tab-item tab-item_active' : 'tab-item'"
                v-for='(item, index) in tabList'
                :key="index">
                <router-link 
                    mode="out-in"
                    :to="item.to">{{item.name}}
                </router-link>
            </div>        
        </div>
        <transition name="slide">
            <slot>
            </slot> 
        </transition>
    </div>
</template>

<script>
import Swiper from './swiper';

export default {
    mounted() {
        this.nowPath = this.$route.path;
        this.tabSwiper = new Swiper(this.$el, this.tabList, this.$router, this.$route.path);
    },
    data() {
        return {
            tabSwiper: {},
            tabList: [{
                name: 'tab1',
                to: '/'
            }, {
                name: 'tab2',
                to: '/page2'
            }, {
                name: 'tab3',
                to: '/page3'
            }, {
                name: 'tab4',
                to: '/page4'
            }],
            nowPath: ''
        };
    },
    methods: {
    },
    watch: {
        '$route' (to, from) {
            this.nowPath = to.path;
            this.tabSwiper.upDateNowPath(to.path);
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
        }
    }
};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        width: 100%;
        background-color: #fbf9fe;
    }
    a {
        color: #333;
        text-decoration: none;
    }
    .page-tab {
        display: flex;
        justify-content: center;
    }
    .tab-item {
        text-align: center;
        align-items: center;
        height: 44px;
        line-height: 44px;
        flex: 1;
        height: 100%;
        background-color: #fff;
    }
    .tab-item_active {
        color: #f90;
        border-bottom: 3px solid #f90;
    }
    .slide-enter-active, .slide-leave-active {
        position: absolute;
        transition: all .5s;
        transform: translate3d(0px, 0px, 0px);
    }
    .slide-enter, .slide-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        position: absolute;
        transform: translate3d(-200px, 0px, 0px);
    }
</style>
