import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routerBase = [
    {
        path: '/',
        name: 'button',
        redirect: '/button'
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('../docs/button.md')
    }
]

const router = new Router({
    routes: routerBase,
    // mode: 'history'
})

export default router