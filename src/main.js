// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import Vs from 'vue-resource'

import {InfiniteScroll} from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.use(Vs);

//导入vue-resource并使用use

//Axios.defaults.baseURL='http://wtliu.com';
//Axios.defaults.headers.post['Content-Type']
Vue.config.productionTip = false;

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


import VueRouter from 'vue-router';

Vue.use(VueRouter);


//1.创建组件
import detail from './components/details.vue'
import user from './components/user/user.vue'
import userList from './components/user/userList.vue'
import userAdd from './components/user/userAdd.vue'
import detailsNews from './components/detailsNews.vue';
import account from './components/account.vue'
import todo from './components/todolist.vue';
import contentand from './components/contentand.vue'

//2.配置路由   注意：名字

const routes = [
  { path: '/detail', component: detail },
  { path: '/son', component: detailsNews },
  {path:'/todo',component:todo},
  {path:'/account',component:account},
  {path:'/user',component:user,children:[{path:'/user/add',component:userAdd},{path:'/user/list',component:userList}]},
  {path:'/contentand/:aid',component:contentand},
  {path:'*',component:detail}
    /*默认跳转路由*/
];


//3.实例化VueRouter  注意：名字

const router = new VueRouter({
  mode:'history',
  routes // （缩写）相当于 routes: routes
});




//4、挂载路由




//5 <router-view></router-view> 放在 App.vue

/* eslint-disable no-new */
new Vue({
  el: '#app',
router,
  components: { App },
  template: '<App/>'
});
