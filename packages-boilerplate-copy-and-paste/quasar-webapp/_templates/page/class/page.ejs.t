---
to: src/pages/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: '<%= h.changeCase.pascal(name) %>',
})
export default class <%= h.changeCase.pascal(name) %> extends Vue {
}
</script>

<style>
</style>
