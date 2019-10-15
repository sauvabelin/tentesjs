import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/etat',
            name: 'etat',
            component: () => import(/* webpackChunkName: "etat-tente" */ './views/Etat.vue'),
        },
    ],
});
