import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/welcome',
    name: 'welcome',
    component: () => import('../pages/IndexPage.vue')
  },
  {
    path: '/sprint0',
    name: 'sprint-0',
    component: () => import('../pages/MessagesPage.vue')
  },
  {
    path: '/sprint1',
    name: 'sprint-1',
    component: () => import('../pages/Sprint1Page.vue')
  },
  {
    path: '/sprint2',
    name: 'sprint-2',
    component: () => import('../pages/Sprint2Page.vue')
  },
  {
    path: '/sprint3',
    name: 'sprint-3',
    component: () => import('../pages/Sprint3Page.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../pages/404.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
