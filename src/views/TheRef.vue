<script setup>
//必須先引入ref
import { ref } from "vue";

// 創建一個ref
const count = ref(0);

// 修改ref的值
// 記得要使用 ".value"
count.value = 1;

//綁定到template
const h2 = ref(null);
</script>

<template>
  <h1>{{ count }}</h1>
  <h2 ref="h2">Hello Vue 3</h2>
  <button @click="count++">+1</button>
</template>

<style></style>
