import { Component, Vue } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

@Component({
  name: 'UiComponent',
})
export default class UiComponent extends Vue {
  render(createElement: CreateElement): VNode {
    return createElement('div');
  }
}
