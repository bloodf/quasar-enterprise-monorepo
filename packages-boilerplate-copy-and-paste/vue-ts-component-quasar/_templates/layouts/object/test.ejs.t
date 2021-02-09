---
to: tests/unit/layouts/<%= folder %>/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { shallowMount } from '@vue/test-utils';
import { mountQuasarOptions } from 'tests/utils';
import <%= h.changeCase.pascal(name) %> from 'layouts/<%= folder %><%= h.changeCase.pascal(name) %>.vue';

describe('Mount <%= h.changeCase.pascal(name) %>.vue', () => {
  const baseOptions = mountQuasarOptions();

  it('passes the sanity check and creates a wrapper', () => {
    const wrapper = shallowMount<<%= h.changeCase.pascal(name) %>>(<%= h.changeCase.pascal(name) %>, {
      ...baseOptions,
    });

    expect(wrapper.exists()).toBe(true);
  });
});
