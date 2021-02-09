---
to: src/layouts/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: '<%= h.changeCase.pascal(name) %>',
  setup() {
    return {};
  },
});
</script>

<style>
</style>
