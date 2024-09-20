<script setup>
// import { ref } from "vue";

// const username = ref("");
// const checked = ref(false);
// const checkedNames = ref([]);
// const picked = ref("");
// const selected = ref("");
</script>

<template>
  <!-- 輸入框 -->
  <h1>輸入框</h1>
  <p><input type="text" /></p>
  <h3>{{ username }}</h3>

  <!-- modifier -->
  <!-- 去空白 -->
  <!-- 轉數字 -->

  <!-- 單一複選框 -->
  <h1>單一複選框 checkbox</h1>
  <p>
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">單一複選框</label>
  </p>
  <p>{{ checked }}</p>
  <!-- true-value & false-value -->

  <!-- 多個複選框 -->
  <h1>多個複選框 checkbox</h1>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" />
  <label for="mike">Mike</label>

  <!-- 單選按鈕 -->
  <h1>單選按鈕 radio</h1>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" />
  <label for="two">Two</label>

  <!-- 下拉選單 -->
  <h1>下拉選單 select</h1>
  <div>Selected: {{ selected }}</div>

  <select>
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
