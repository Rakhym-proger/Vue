import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {
        updateName(state, data) {
            state.name = data;
            alert("Store: " + state.name);
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
        }
    },


    modules: {}

});
