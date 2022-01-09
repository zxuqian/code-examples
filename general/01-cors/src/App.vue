<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // fetch("http://localhost:5000")
  fetch("/api")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
});
</script>

<template></template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
