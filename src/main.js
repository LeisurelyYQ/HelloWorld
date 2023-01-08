import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 把组件库导进来
import { Lazyload } from 'vant';
import Vant from 'vant';
// 把组件库的样式导入进来
import 'vant/lib/index.css';
// 使用组件库
Vue.use(Vant);
Vue.use(Lazyload)
Vue.config.productionTip = false
// 导入进我们的axios配置
import myaxios from './utils/http'
// 把我们创建的axios实列挂载在全局的$axios上面去，后面通过this.$aixos就可以进行接口的调用
Vue.prototype.$axios = myaxios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
