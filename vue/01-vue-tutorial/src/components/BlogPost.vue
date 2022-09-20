<template>
  <div>
    <h1>
      <a :href="link" @click.prevent="$emit('titleClick', title)">{{
        title
      }}</a>
    </h1>
    <article>
      <div>
        {{ content.slice(0, 100) }}
      </div>
      <p>阅读量：{{ viewCount }}</p>
      <footer v-if="content.length > 100">
        <button>阅读原文</button>
      </footer>
    </article>
    <slot></slot>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

defineProps(["title", "content", "link"]);
defineEmits(["titleClick"]);

const viewCount = ref(0);

onMounted(() => {
  setTimeout(() => {
    viewCount.value = 1000000;
  }, 1000);
});
</script>
