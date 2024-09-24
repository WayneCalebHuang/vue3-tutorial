<script setup>
import { ref } from "vue";

const members = ref([
  { name: "Stanley", age: 18, empNr: 90699501 },
  { name: "Jacky", age: 20, empNr: 92122311 },
  { name: "Wayne", age: 22, empNr: 92409511 }
]);
</script>

<template>
  <ul>
    <li v-for="member in members" :key="member.empNr">{{ member.name }} - {{ member.age }}</li>
  </ul>
  <!-- ES6 -->
  <!-- Destructuring -->
  <ul>
    <li v-for="{ name, empNr } in members" :key="empNr">{{ name }}</li>
  </ul>
</template>

<style></style>
