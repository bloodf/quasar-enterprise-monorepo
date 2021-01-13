<template>
  <div>
    <counter />
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageIndex',
  components: {
    Counter: () => import('components/Counter.vue'),
  },
};
</script>
