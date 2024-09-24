<script setup>
import { ref } from "vue";

const isActive = ref(true);
const hasError = ref(true);
const h1Classes = ref({
  active: isActive,
  "bg--teal1": hasError
});
const dangerColor = ref("red");
</script>

<template>
  <h1 class="title" :class="h1Classes">Class Binding</h1>
  <h1 style="font-size: 3rem" :style="{ color: dangerColor }">Style Binding</h1>
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
