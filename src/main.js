import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


if (navigator.serviceWorker) {
  window.addEventListener('DOMContentLoaded',function() {
    // 调用 serviceWorker.register 注册，参数 /sw.js 为脚本文件所在的 URL 路径
      navigator.serviceWorker.register('/sw.js');
  });
}

new Vue({
  render: h => h(App)
}).$mount('#app')
