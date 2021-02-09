---
to: src/components/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '<%= h.changeCase.pascal(name) %>',
});
</script>

<style>
</style>
