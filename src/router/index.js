import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
let originPush = VueRouter.prototype.push;

//接下来我们重写push|replace方法  
//第一个参数location参数像原push方法声明跳转的地方 resolve和reject传递成功与失败

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //如果成功 调用原来的push方法  
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    //重定向属性：路由嵌套过多的时候，就需要重定型了
    redirect: '/movie',
    children: [
      {
        path: 'movie',
        name: 'movie',
        component: () => import('../views/Movies.vue'),
        // 最后层级的地方也需要重定向
        redirect: '/movie/hot',
        children: [
          {
            path: 'hot',
            name: 'hot',
            component: () => import('../views/movies/Hot.vue')
          },
          {
            path: 'son',
            name: 'son',
            component: () => import('../views/movies/Son.vue')
          }
        ]
      },
      {
        path: 'cinema',
        name: 'cinema',
        component: () => import('../views/Cinema.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/News.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },

    ]
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/City.vue')
  },
  {
    path: '/movie_info',
    name: 'movie_info',
    component: () => import('../views/MovieInfo.vue')
  }

]
//保存下来push方法 将来我们还会用到原push方法进行路由跳转

const router = new VueRouter({
  routes
})

export default router
