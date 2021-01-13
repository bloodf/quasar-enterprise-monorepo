import Vue from 'vue';
import App from './App.vue';
import './quasar';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store: store({ Vue }),
  render: (h) => h(App),
}).$mount('#app');
