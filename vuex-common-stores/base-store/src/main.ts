import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import './quasar';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

new Vue({
  store: store({ Vue }),
  render: (h) => h(App),
}).$mount('#app');
