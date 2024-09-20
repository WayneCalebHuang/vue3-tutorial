<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <h1>{{ count }}</h1>

  <!-- 內聯事件處理器 -->
  <button v-on:click="count++">+</button>

  <!-- 方法事件處理器 -->

  <!-- 按鍵事件 -->
</template>

<style></style>
