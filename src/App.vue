<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/syntax">syntax</RouterLink>
    <RouterLink to="/ref">ref</RouterLink>
    <RouterLink to="/computed">computed</RouterLink>
    <RouterLink to="/classAndStyle">class & Style</RouterLink>
    <RouterLink to="/conditional">conditional rendering</RouterLink>
    <RouterLink to="/list">list rendering</RouterLink>
    <RouterLink to="/event">event handling</RouterLink>
    <RouterLink to="/v-model">v-model</RouterLink>
    <RouterLink to="/lifecycle">lifecycle</RouterLink>
    <RouterLink to="/watchers">watchers</RouterLink>
    <RouterLink to="/component">component</RouterLink>
    <RouterLink to="/pinia">pinia</RouterLink>
    <RouterLink to="/fetch">fetch data & async await</RouterLink>
  </nav>
  <main><RouterView /></main>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  /* min-height: 3rem; */
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
}

nav a {
  text-decoration: none;
  background-color: var(--color-teal1);
  color: var(--color-teal6);
  display: block;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
}

nav a.router-link-exact-active {
  background-color: var(--color-teal6);
  color: #fff;
}
</style>
