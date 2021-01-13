/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { ComponentOptions, VueConstructor } from 'vue';
import { mount, shallowMount, Wrapper } from '@vue/test-utils';
import { mountQuasarOptions } from './mountQuasarOptions';
import { VueClass } from './models';

export function mountWrapper<V extends Vue>(
  localVue: VueConstructor,
  component: ComponentOptions<V>,
  options?: typeof mountQuasarOptions,
): Wrapper<V>;
export function mountWrapper<V extends Vue>(
  localVue: VueConstructor,
  component: VueClass<V>,
  options?: typeof mountQuasarOptions,
): Wrapper<V>;
export function mountWrapper<V extends Vue>(
  localVue: VueConstructor,
  component: any,
  options?: typeof mountQuasarOptions,
): Wrapper<V> {
  const baseOptions = options && typeof options === 'function' ? options() : mountQuasarOptions({});

  return (baseOptions.mount?.type === 'full' ? mount : shallowMount)<V>(component, {
    ...baseOptions.mount,
    propsData: {
      ...baseOptions.mount?.propsData,
      ...baseOptions.propsData,
    },
    localVue,
  });
}
