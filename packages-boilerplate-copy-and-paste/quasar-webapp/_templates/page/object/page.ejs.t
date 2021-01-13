---
to: src/pages/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '<%= h.changeCase.pascal(name) %>',
});
</script>

<style>
</style>
