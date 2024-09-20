<script setup>
//必須先引入ref
import { ref } from "vue";

// 創建一個ref
const count = ref(0);

// 修改ref的值
// 記得要使用 ".value"

//綁定到template
</script>

<template>
  <h1>{{ count }}</h1>
</template>

<style></style>
