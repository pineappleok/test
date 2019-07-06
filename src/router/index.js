import Vue from 'vue'
import Router from 'vue-router'
import state from '../store/state';

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const objRouter = new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登陆页'
      },
      component: () =>
        import ('@/views/login')
    },
    {
      path: '/index',
      name: 'aaa',
      meta: {
        title: '首页',
        needAuthor: true
      },
      component: () =>
        import ('@/views/index')
    },
    {
      path: '/other',
      name: 'other',
      meta: {
        show: true,
        title: '其他页'
      },
      component: () =>
        import ('@/views/other')
    }
  ]
});

// 路由导航守卫：1.将数据段传给store 2.由v-top-bar控制标题 3.检测是否登录
objRouter.beforeEach((to, from, next) => {
  const meta = to.meta || {};
  const title = meta.title || '项目名';
  document.title = title;
  const show = meta.show;
  
  state.showParent = show ? true : false;
  if (meta.needAuthor) {
    if (window.localStorage.getItem('token')) {
      next();
    } else {
      setTimeout(() => {
        console.log(1)
        objRouter.push('/login');
      }, 1000)
    }
  } else {
    next();
  }

});

objRouter.afterEach((to, from) => {

});


export default objRouter;
