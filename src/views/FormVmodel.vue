<script setup>
import { ref } from "vue";

const username = ref("");
const username2 = ref("");
const isChecked = ref(false);
const checkedNames = ref([]);
const picked = ref("");
const selected = ref("");
</script>

<template>
  <!-- 輸入框 -->
  <h1>輸入框</h1>
  <p><input type="text" v-model="username" /></p>
  <h3>{{ username }}</h3>

  <!-- modifier -->
  <!-- 去空白 -->
  <p><input type="text" v-model.trim="username2" /></p>
  <h3>{{ username2 }}</h3>
  <!-- 轉數字 -->

  <!-- 單一複選框 -->
  <h1>單一複選框 checkbox</h1>
  <p>
    <input type="checkbox" id="checkbox" v-model="isChecked" />
    <label for="checkbox">單一複選框</label>
  </p>
  <p>{{ isChecked }}</p>
  <!-- true-value & false-value -->

  <!-- 多個複選框 -->
  <h1>多個複選框 checkbox</h1>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <!-- 單選按鈕 -->
  <h1>單選按鈕 radio</h1>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <!-- 下拉選單 -->
  <h1>下拉選單 select</h1>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<style scoped>
h1:not(:first-child) {
  margin-top: 1rem;
}
</style>
