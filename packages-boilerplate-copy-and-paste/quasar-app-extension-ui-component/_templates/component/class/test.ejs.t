---
to: tests/unit/components/<%= folder %>/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { shallowMount } from '@vue/test-utils';
import { mountQuasarOptions } from 'tests/utils';
import <%= h.changeCase.pascal(name) %> from 'component/<%= folder %><%= h.changeCase.pascal(name) %>.vue';

describe('Mount <%= h.changeCase.pascal(name) %>.vue', () => {
  const baseOptions = mountQuasarOptions();

  const wrapper = shallowMount<<%= h.changeCase.pascal(name) %>>(<%= h.changeCase.pascal(name) %>, {
    ...baseOptions,
  });

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
