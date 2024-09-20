<script setup>
//引入useRoute
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);
</script>
<template>
  <h1>
    <!-- 当前路由可以通过 $route 在模板中访问 -->
    <!-- route 要加$ -->
    User {{ $route.params.id }}
  </h1>
</template>
