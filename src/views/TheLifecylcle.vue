<script setup>
//必須先引入 lifeCycle hooks
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

const count = ref(0);
const increment = () => {
  count.value++;
};

console.log("setup");

// 已掛載
onMounted(() => {
  console.log("mounted");
  // call api
});

// 已更新
onUpdated(() => {
  console.log("updated");
});

// 已卸載
onUnmounted(() => {
  console.log("unmounted");
});
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="increment">+</button>
</template>

<style></style>
