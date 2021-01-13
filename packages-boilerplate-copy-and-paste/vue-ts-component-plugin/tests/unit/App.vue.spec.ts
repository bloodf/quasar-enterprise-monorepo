/**
 * @jest-environment jsdom
 */
import { shallowMount } from '@vue/test-utils';
import { mountQuasarOptions } from 'tests/utils';

import App from 'src/App.vue';

describe('Mount App.vue', () => {
  const baseOptions = mountQuasarOptions();

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount(App, {
      ...baseOptions,
    });

    expect(wrapper.exists()).toBe(true);
  });
});
