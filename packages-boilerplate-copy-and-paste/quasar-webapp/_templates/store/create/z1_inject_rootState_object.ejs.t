---
to: src/store/rootState.ts
inject: true
after: "export interface RootState {"
---
  <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>StateInterface;
