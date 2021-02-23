---
to: test/jest/__tests__/layouts/<%= folder %>/<%= h.changeCase.pascal(name) %>.spec.ts
---
import { shallowMount } from '@vue/test-utils';
import { mountQuasarOptions } from 'jest/utils';
import <%= h.changeCase.pascal(name) %> from 'layouts/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue';

describe('Mount <%= h.changeCase.pascal(name) %>.vue', () => {
   const baseOptions = mountQuasarOptions();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
   const wrapper = shallowMount<typeof <%= h.changeCase.pascal(name) %>>(<%= h.changeCase.pascal(name) %>, {
     ...baseOptions,
   });

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
