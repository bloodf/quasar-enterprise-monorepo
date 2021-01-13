<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="primary"
      elevated
    >
      <q-toolbar>
        <q-toolbar-title>
          Vue TS Component Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  name: 'LayoutDefault',
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  leftDrawerOpen = false;
}
</script>

<style>
</style>
