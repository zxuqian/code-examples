<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted, watch, toRefs } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    default: {},
    required: true,
  },
});

const { options } = toRefs(props);

const container = ref(null);
const chart = ref(null);

onMounted(() => {
  chart.value = echarts.init(container.value, "dark");
  chart.value.setOption(props.options);
});

watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions);
  },
  { deep: true }
);
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
