---
to: test/jest/__tests__/components/<%= folder %>/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { shallowMount } from '@vue/test-utils';
import { mountQuasarOptions } from 'jest/utils';
import <%= h.changeCase.pascal(name) %> from 'components/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue';

describe('Mount <%= h.changeCase.pascal(name) %>.vue', () => {
  const baseOptions = mountQuasarOptions();

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount<<%= h.changeCase.pascal(name) %>>(<%= h.changeCase.pascal(name) %>, {
      ...baseOptions,
    });

    expect(wrapper.exists()).toBe(true);
  });
});

