<template>
    <div class="main">
        <div class="page-tab">
            <div 
                class="tab-item"
                v-for='(item, index) in tabList'
                :key="index">
                <router-link 
                    mode="out-in"
                    :to="item.to">{{item.name}}
                </router-link>
            </div>        
        </div>
        <transition name="fade">
            <slot>
            </slot> 
        </transition>
    </div>
</template>

<script>
import Swiper from './swiper';

export default {
    mounted() {
        console.log(this.$el);
        new Swiper(this.$el, this.tabList, this.$router);
    },
    data() {
        return {
            tabList: [{
                name: 'tab1',
                to: '/'
            }, {
                name: 'tab2',
                to: '/page2'
            }, {
                name: 'tab3',
                to: '/'
            }, {
                name: 'tab4',
                to: '/page2'
            }],
            distanceX: 0,
            startX: 0
        };
    },
    methods: {
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            console.log(to.path);
            console.log(from.path);
        }
    }
};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .page-tab {
        display: flex;
    }
    .tab-item {
        text-align: center;
        flex: 1;
        background-color: #ccc;
    }
    .tab-item a {
        color: #333;
    }
    .fade-enter-active, .fade-leave-active {
        position: absolute;
        transition: opacity 1.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        position: absolute;
        opacity: 0
    }
</style>
