import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';

import Hello from './components/Hello';
import Screen from './components/Screen';
import Video from './components/Video';
import JavaScript from './components/JavaScript';
import Effect from './components/Effect';
import Test from './components/Test';
// 开启debug模式
Vue.config.debug = true;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

const router = new VueRouter({
    //    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Hello,
    }, {
        path: '/test',
        component: Test,
    }, {
        path: '/screen',
        component: Screen,
    }, {
        path: '/video',
        component: Video,
    }, {
        path: '/jsapi',
        component: JavaScript,
    }, {
        path: '/effect',
        component: Effect,
    }],
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
