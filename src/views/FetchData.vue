<script setup>
import { onMounted, ref } from "vue";

const userList = ref([]);

const getData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("err");
    }

    const data = await response.json();
    console.log(data);
    userList.value = data.results;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getData();
});
</script>

<template>
  <h1>fetch</h1>
  <ul>
    <li v-for="user of userList" :key="user.login.uuid">
      <img :src="user.picture.thumbnail" alt="" />
      <p>{{ user.name.first }} {{ user.name.last }}</p>
    </li>
  </ul>
</template>
