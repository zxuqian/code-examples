<template>
  <div class="blog-post">
    <h2 class="blog-title">
      <a :href="link" target="_blank" rel="noopener noreferrer" @click="$emit('titleClick', title)">
        {{ title }}
      </a>
    </h2>
    <article class="blog-content">
      <div class="blog-excerpt">
        {{ content.slice(0, 100) }}
      </div>
      <p class="view-count">阅读量：{{ viewCount }}</p>
      <footer v-if="content.length > 100" class="blog-footer">
        <a :href="link" target="_blank" rel="noopener noreferrer" class="read-more">阅读原文</a>
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

<style scoped>
.blog-post {
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-post:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.blog-title {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

.blog-title a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-title a:hover {
  color: var(--button-bg);
}

.blog-content {
  color: var(--text-color);
}

.blog-excerpt {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.view-count {
  font-size: 0.9rem;
  color: #888;
}

.blog-footer {
  margin-top: 1rem;
}

.read-more {
  display: inline-block;
  color: var(--button-bg);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.read-more:hover {
  opacity: 0.8;
}
</style>
