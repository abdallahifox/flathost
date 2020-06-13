/* eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import CompHome from './components/Home/index.vue'
import ComFeatuers from './components/Featuers/index.vue'
import CompPartners from './components/Partners/index.vue'
import CompPricing from './components/Pricing/index.vue'
import CompBlog from './components/Blog/Blog.vue'
import CompSingleBlog from './components/Blog/singleBlog.vue'
import CompContact from './components/Contact/index.vue'
import CompLogin from './components/Login/index.vue'
import CompError from './components/404 Not Found/404.vue'
const routes = [
    {
        path: '/',
        component:CompHome
    },
    {
        path: '/featuers',
        component: ComFeatuers
    },
    {
        path: '/partners',
        component: CompPartners
    },
    {
        path: '/pricing',
        component: CompPricing
    },
    {
        path: '/blog',
        component: CompBlog
    },
    {
        path: '/single-blog',
        component:CompSingleBlog
    },
    {
        path: '/contact',
        component: CompContact
    },
    {
        path: '/login',
        component: CompLogin
    },
    {
        path: '/404',
        component: CompError
    }    
]

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to,from,savedPosition){
        return {
            x:0,
            y:0
        }
    }
})