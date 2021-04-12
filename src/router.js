import Vue from 'vue'
import VueRouter from 'vue-router'
import First from "@/components/Content/First/First";
import Second from "@/components/Content/Second/Second";
import Third from "@/components/Content/Third/Third";

import App from "@/App";
// import firebase from 'firebase/app'
import store from '@/store'

Vue.use(VueRouter)

const route = new VueRouter({
    mode: "history",
    routes: [
        {path: '/', meta: {}, component: First},
        {path: '/second', meta: {}, component: Second},
        {path: '/third', meta: {}, component: Third}
    ]
});



route.beforeEach(async (to, from, next) => {
    // const store = await import('./store');
    // store.commit('updateName', 'Roha');
    alert(store.getters.getEmail);
    // if (to.name === 'Second') {
    //     alert(from.matched);
    //     if (Content.data().name !== null && Content.data().email !== null) {
    //         next();
    //     } else {
    //         next(from.path);
    //     }
    // } else if (to.name === 'Third') {
    //     if (Content.data().tel !== null) {
    //         next();
    //     } else {
    //         next(from.path);
    //     }
    // } else {
    next();
    // }
});

export default route;