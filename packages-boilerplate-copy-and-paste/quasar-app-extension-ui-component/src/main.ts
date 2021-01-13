import Vue from 'vue';
// eslint-disable-next-line import/extensions
import App from './App.vue';
import './quasar';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
