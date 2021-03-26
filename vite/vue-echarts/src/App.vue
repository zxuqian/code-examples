<template>
  <div class="wrapper">
    <BarChart class="chart" />
  </div>
</template>

<script setup>
import BarChart from "./components/BarChart.vue";
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: hsl(210deg, 20%, 10%);
}
.wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.wrapper .chart {
  width: 50%;
  height: 70%;
}
</style>
