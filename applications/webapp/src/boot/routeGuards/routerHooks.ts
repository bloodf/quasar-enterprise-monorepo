import 'vue-class-component/hooks';
import Component from 'vue-class-component';

export default () => {
  Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
  ]);
};
