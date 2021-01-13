/**
 * @jest-environment jsdom
 */

import { shallowMount } from '@vue/test-utils';
import { mountQuasarOptions } from 'tests/utils';
import App from 'src/App.vue';

describe('Mount App.vue', () => {
  const baseOptions = mountQuasarOptions();

  const wrapper = shallowMount(App, {
    ...baseOptions,
  });

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
