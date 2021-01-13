import Vue, { ComponentOptions } from 'vue';
import { Wrapper } from '@vue/test-utils';
import { QuasarMountOptions, VueClass } from './models';
import { mountQuasarOptions } from './mountQuasarOptions';
import { mountWrapper } from './mountWrapper';

export function mountFactory<V extends Vue>(
  component: VueClass<V>,
  options?: typeof mountQuasarOptions,
): (propsData?: QuasarMountOptions['propsData']) => Wrapper<V>;
export function mountFactory<V extends Vue>(
  component: ComponentOptions<V>,
  options?: typeof mountQuasarOptions,
): (propsData?: QuasarMountOptions['propsData']) => Wrapper<V>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mountFactory(component: any, options?: typeof mountQuasarOptions) {
  const baseOptions = options && typeof options === 'function' ? options() : mountQuasarOptions({});

  const { localVue } = baseOptions;

  return (propsData?: QuasarMountOptions['propsData']) => mountWrapper(localVue, component, options?.bind(null, {
    propsData,
  }));
}
