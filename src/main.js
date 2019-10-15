import Vue from 'vue';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/scss/main.scss';

Vue.use(Toasted, {
    position: 'bottom-center',
    duration: 5000,
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
