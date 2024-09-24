<script setup>
//必須先引入watch
import { ref, watch, watchEffect } from "vue";

const count = ref(0);
const count2 = ref(0);

const clickHandler = () => {
  count.value++;
};

// watch
watch(count, (newValue, oldValue) => {
  // do something
  console.log("newValue", newValue);
  console.log("oldValue", oldValue);
});
// watchEffect
watchEffect(() => {
  console.log("count", count.value);
  console.log("count2", count2.value);
});
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="clickHandler">+</button>
  <button @click="count2++">+</button>
</template>

<style></style>
