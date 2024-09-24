<script setup>
let msg = "Hello Vue 2";
let id = "bindAttr";
let num = 1;
</script>

<template>
  <h1>模板語法</h1>
  <!-- 文本插值  -->
  <p>{{ msg.toLocaleUpperCase() }}</p>

  <!-- 屬性綁定 -->
  <div>屬性綁定</div>
  <h1 :id>bindAttr</h1>

  <!-- JS 表達式 -->
  <div :id="`item${num}`">aaa</div>
  <div :id="'item' + num">aaa</div>
</template>

<style></style>
