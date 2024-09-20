<script setup>
//引入子元件
import ButtonCounter from "@/components/ButtonCounter.vue";
import { ref } from "vue";

//父組件的data
const parentCount = ref(0);

// const parentCountAdd = (e) => {
//   parentCount.value += e;
// };
</script>

<template>
  <h1>parentCount: {{ parentCount }}</h1>
  <h3>1.無emit</h3>
  <ButtonCounter />
  <h3>2.emit(無參數)</h3>
  <ButtonCounter />
  <h3>3. emit(有參數)</h3>
  <ButtonCounter />

  <!-- <h3>1.無emit</h3>
  <ButtonCounter :title="'child 1'" />
  <h3>2.emit(無參數)</h3>
  <ButtonCounter :title="'child 2'" @parentAdd="parentCount++" />
  <h3>3. emit(有參數)</h3>
  <ButtonCounter :title="'child 3'" @parentAdd="(n) => (parentCount += n)" /> -->
</template>

<style></style>
