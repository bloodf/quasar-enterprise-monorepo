---
to: src/store/rootGetters.ts
inject: true
before: "export interface RootGetters {"
---
import { <%= h.changeCase.pascal(name) %>Getters } from 'store/modules/<%= h.changeCase.camel(name) %>/getters';
