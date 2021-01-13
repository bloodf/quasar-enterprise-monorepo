<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script script="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'App',
})
export default class App extends Vue {}
</script>
