# maizuo
 # 尝试在网页上在线修改文件
 # try to edit file online
## Project setup
```复活项目，没有node_modules包的情况下需要项目复活
npm install
```

### Compiles and hot-reloads for development
```启动项目的命令
npm run serve

```

### Compiles and minifies for production
```打包项目的命令：项目优化！过滤掉没有使用过的包。压缩我们的文件压缩成一行代码。
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目开始 
删除文件：components里面的helloword.vue组件删除
找到HomeView.vue文件把helloword相关删除，图片删除
找到App.vue文件删除nav标签里面所有的东西
### 引入组件库 https://vant-contrib.gitee.io/vant/v2/#/zh-CN/home
进入组件库域名：找到介绍》
点击：快速上手这一个选项
复制：安装命令：vant2的安装方式
在项目根目录右键打开集成终端：npm i vant@latest-v2 -S  敲击回车
安装完成之后：检查package.json文件是否有"vant": "^2.12.53",  这一个选项
如果有可以进行下一步。
回到ui组件库域名：找到快速上手这一个目录，往下寻找-找到安装方式三：
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);  

复制上面代码到项目里面 src/main.js文件当中

找到HomeView.vue文件-看向组件组找组件
找到组件库当中的导航组件找到tabbar标签栏组件
    拷贝代码 
    拷贝到HomeView.vue文件当中
data里面也需要放东西：放你v-model绑定的属性

添加逻辑代码：在组件头部绑定一个事件 @change事件
在methods里面
    把我们的事件写出来，打印我们能不能执行  
因为写了tabbar组件所以要写出四个路由以及四个组件出来
先写组件：
应为项目本身自带了AboutView.vue文件所以需要重新创建三个组件出来
分别为：MOvies.vue   Cinema.vue  News.vue以及自带的AboutView.vue
### 写路由找到router/index.js文件
### 配置路由选项
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'movie',
        name:'movie',
        component:()=>import('../views/Movies.vue')
      },
      {
        path:'cinema',
        name:'cinema',
        component:()=>import('../views/Cinema.vue')
      },
      {
        path:'news',
        name:'news',
        component:()=>import('../views/News.vue')
      },
      {
        path:'about',
        name:'about',
        component:()=>import('../views/AboutView.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router

### 上面就算初步完成路由配置

### 回到HomeView.vue组件在组件上方写上 <router-view/>标签来渲染另外四个组件以及四个路由
### 在HomeView.vue文件当中根据@change事件来进行路由的跳转
### 应为写了四个组件以及四个路由，没办法识别你到底渲染哪一个路由
### 所以需要进行事件的判断。
