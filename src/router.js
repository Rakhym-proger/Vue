import Vue from 'vue'
import VueRouter from 'vue-router'
import First from "@/components/Content/First/First";
import Second from "@/components/Content/Second/Second";
import Third from "@/components/Content/Third/Third";

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
    next();
});

export default route;