<script setup>
import { onMounted } from "vue";

// const userList = ref([]);

const getData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("err");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <h1>fetch</h1>
</template>
