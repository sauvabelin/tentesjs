import Vue from 'vue';
import Vuex from 'vuex';

import Router from './router';
import Api from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        step: 0,
        models: [],
        model: null,
        loading: false,
        formValues: [],
        token: null,
    },
    getters: {
        model(state) {
            if (state.model === null) return null;
            return state.models[state.model];
        },
    },
    mutations: {
        step(state, step) {
            state.step = step;
        },
        setFormValues(state, data) {
            const { step } = state;
            if (state.formValues.length < step) {
                for (let i = state.formValues.length; i < step; i += 1) {
                    state.formValues[i] = null;
                }
            }

            state.formValues[step] = data;
        },
        loading(state, v) {
            state.loading = v;
        },
        model(state, model) {
            state.model = model;
        },
        models(state, models) {
            state.models.splice(0);
            models.forEach(m => state.models.push(m));
        },
        token(state, token) {
            state.token = token;
        },
    },
    actions: {
        async run({ state, commit }, { route, method, params }) {
            const handler = (e) => {
                const { status } = e.response;
                if (status === 401) {
                    // eslint-disable-next-line
                    this._vm.$toasted.show('Vous avez été déconnecté après une trop longue session');
                    commit('token', null);
                    Router.push('/');
                }
            };

            if (method === 'POST') {
                return Api.post(route, state.token, params).catch(handler);
            }
            return Api.get(route, state.token).catch(handler);
        },
        async logIn({ commit }, { username, password }) {
            try {
                const { data: { token } } = await Api.login(username, password);
                commit('token', token);
                return true;
            } catch (e) {
                return false;
            }
        },
        async loadModels({ commit, dispatch }) {
            const { data } = await dispatch('run', { route: 'tente/feuille-etat/tente-model-form' });
            commit('models', data);
        },
        async sendFormData({ state, dispatch }) {
            try {
                await dispatch('run', {
                    route: 'tente/feuille-etat/submit',
                    method: 'POST',
                    params: state.formValues,
                });
                return true;
            } catch (e) {
                // eslint-disable-next-line
                this._vm.$toasted.show('Une erreur est survenue, veuillez réessayer', { type: 'error' });
                return false;
            }
        },
    },
});

store.subscribeAction({
    before: () => {
        store.commit('loading', true);
    },
    after: () => {
        store.commit('loading', false);
    },
});

export default store;
