---
to: src/store/rootGetters.ts
inject: true
after: "export interface RootGetters {"
---
  <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>Getters;
