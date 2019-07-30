import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ding from './lib/ding'
Vue.config.productionTip = false
// initVue();
ding.ddLogin(location.href).then(data => {
  initVue()
}).catch((err) => {
  let dd = window.dd
  dd.device.notification.alert({
    message: err.msg.errorMessage || err.msg,
    title: '提示',
    buttonName: '确定',
    onSuccess: function() {
      // dd.biz.navigation.close()
    },
    onFail: function(err) {}
  });
})
function initVue() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
