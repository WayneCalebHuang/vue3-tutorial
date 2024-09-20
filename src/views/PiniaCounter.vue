<script setup>
//引入 useCounterStore
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
counter.increment();
</script>

<template>
  <h1>{{ counter.count }}</h1>
  <h1>{{ counter.doubleCount }}</h1>
</template>

<style></style>
