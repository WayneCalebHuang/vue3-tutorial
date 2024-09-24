<script setup>
import { ref } from "vue";
// 使用 defineProps() 來聲明
const props = defineProps(["title", "parentCount"]);
// 使用 defineEmits() 來聲明
const emits = defineEmits(["parentAdd"]);

// 子組件的data
const count = ref(0);

// 需使用到props 和 emits
console.log(props.title);

const clickHandler = (n) => {
  emits("parentAdd", n);
};
</script>

<template>
  <h2>{{ title }}</h2>
  <h2>{{ count }}</h2>
  <h2>parent count: {{ parentCount }}</h2>
  <button @click="count++">child +1</button>

  <!-- emit 要加$ -->
  <button @click="$emit('parentAdd')">parent +1</button>
  <button @click="$emit('parentAdd', 4)">parent +2(argument)</button>
  <button @click="clickHandler(3)">parent +3</button>
</template>

<style>
button {
  margin-inline: 0.25rem;
}
</style>
