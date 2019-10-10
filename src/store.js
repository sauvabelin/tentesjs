import Vue from 'vue';
import Vuex from 'vuex';

import Api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        step: 0,
        models: [],
        model: 0,
    },
    getters: {
        model(state) {
            return state.models[state.model];
        },
    },
    mutations: {
        step(state, step) {
            state.step = step;
        },
        model(state, model) {
            state.model = model;
        },
        models(state, models) {
            models.forEach(m => state.models.push(m));
        },
    },
    actions: {
        loadModels({ commit }) {
            Api.getModels().then(({ data }) => {
                commit('models', data);
            });
        },
    },
});
