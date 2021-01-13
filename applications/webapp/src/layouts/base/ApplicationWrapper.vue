<template>
  <router-view />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ApplicationWrapperLayout',
})
export default class ApplicationWrapperLayout extends Vue {}
</script>
