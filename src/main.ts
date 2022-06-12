import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import VueSvgGauge  from 'vue-svg-gauge';
import VueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false
Vue.use(VueApexCharts);
Vue.use(VueSvgGauge);
Vue.component('apex-chart',VueApexCharts);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
