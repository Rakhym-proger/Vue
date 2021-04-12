import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {
        updateName(state, data) {
            state.name = data;
        },
        updateEmail(state, data) {
            state.email = data;
        },
        updateTel(state, data) {
            state.tel = data;
        }
    },
    state: {
        name: null,
        email: null,
        tel: null
    },
    getters: {
        getName(state) {
            return state.name;
        },
        getEmail(state) {
            return state.email;
        },
        getTel(state) {
            return state.tel;
        },
        isFirstTrue(state){
            return (state.name !== null && state.email !== null);
        },
        isPrevTrue(state){
            return (state.name !== null && state.email !== null && state.tel !== null);
        }
    }

});
