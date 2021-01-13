---
to: src/store/rootState.ts
inject: true
before: "export interface RootState {"
---
import { <%= h.changeCase.pascal(name) %>StateInterface } from 'store/modules/<%= h.changeCase.camel(name) %>/state';
