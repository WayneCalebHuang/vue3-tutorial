<script setup>
import { ref } from "vue";

const count = ref(0);
const countDouble = (num) => {
  count.value = num;
};
const submit = () => {
  console.log("submit");
};
</script>

<template>
  <h1>{{ count }}</h1>

  <!-- 內聯事件處理器 -->
  <button @click="count++">+</button>

  <!-- 方法事件處理器 -->
  <button @click="countDouble(100)">+</button>

  <!-- 按鍵事件 -->
  <input type="text" @keydown.enter="submit" />
</template>

<style></style>
