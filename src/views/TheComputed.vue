<script setup>
//必須先引入computed
import { computed, ref } from "vue";

const count = ref(1);

// 創建一個computed
const doubleCount = computed(() => {
  return count.value * 2;
});

// 記得要使用 ".value"
console.log(doubleCount.value);
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">+1</button>
  <h1>doubleCount: {{ doubleCount }}</h1>
</template>

<style></style>
