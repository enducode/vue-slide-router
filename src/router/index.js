import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import Page1 from '@/pages/page1/index';
import Page2 from '@/pages/page2/index';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
