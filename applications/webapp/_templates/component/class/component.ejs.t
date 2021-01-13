---
to: src/components/<%= folder %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <div />
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
