<script setup>
// import { ref } from 'vue';

// const isActive = ref(true);
// const hasError = ref(false);
// const h1Classes = {
//   active: isActive,
//   'bg--teal1': hasError
// };
// const dangerColor = ref('red');
</script>

<template>
  <h1 class="title">Class Binding</h1>
  <h1 style="font-size: 3rem">Style Binding</h1>
</template>

<style>
.title {
  font-size: 3rem;
}
.active {
  color: var(--color-deloitte);
}
.bg--teal1 {
  background-color: var(--color-teal1);
}
</style>
