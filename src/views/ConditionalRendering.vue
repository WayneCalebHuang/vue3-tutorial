<script setup>
import { ref } from "vue";

const rank = ref(11);
</script>

<template>
  <!-- v-if="true" 才會渲染 -->

  <h1 v-if="rank < 10">Manager</h1>
  <h1 v-else-if="rank < 20">Senior</h1>
  <h1 v-else>Staff</h1>

  <!-- v-show 都會渲染 -->
  <h1 v-show="rank < 10">v-show Manager</h1>
  <h1 v-show="rank < 20">v-show Senior</h1>

  <!-- 用 <template> 將多個元素包起來-->
</template>

<style></style>
