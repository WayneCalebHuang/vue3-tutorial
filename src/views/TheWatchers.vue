<script setup>
//必須先引入watch
import { ref } from "vue";

const count = ref(0);

const clickHandler = () => {
  count.value++;
};

// watch

// watchEffect
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="clickHandler">+</button>
</template>

<style></style>
