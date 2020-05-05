import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import VeeValidate from 'vee-validate';

Vue.use(Vuesax)
Vue.use(VeeValidate)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/dashboard',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')