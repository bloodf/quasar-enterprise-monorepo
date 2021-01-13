/**
 * @jest-environment jsdom
 */

import { shallowMount, createLocalVue } from '@vue/test-utils';
import { LooseDictionary } from 'quasar';
import * as All from 'quasar';
import VueRouter from 'vue-router';
import App from 'src/App.vue';

const { Quasar } = All;

const components = Object.keys(All)
  .reduce((
    object: LooseDictionary,
    key: string,
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const val = All[key];
    if (val && val.component && val.component.name != null) {
      // eslint-disable-next-line no-param-reassign
      object[key] = val;
    }
    return object;
  }, {});

describe('Mount App.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components });
  localVue.use(VueRouter);

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: ['router-view'],
    });

    expect(wrapper.exists()).toBe(true);
  });
});
