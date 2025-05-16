<script setup>
import { ref, computed, onMounted } from "vue";
import BlogPost from "./components/BlogPost.vue";

const blogs = ref([
  {
    id: 1,
    title: "Vue 3 基础教程",
    content: "Vue 3 在 Vue 2 的基础上发生了重大变化",
    link: "https://space.bilibili.com/302954484/lists/1949121?type=series",
  },
  {
    id: 2,
    title: "React 18 基础教程",
    content: "React 18 在 React 17 的基础上发生了重大变化",
    link: "https://www.bilibili.com/cheese/play/ss11302?csource=private_space_tougao_null&spm_id_from=333.1387.search.video_card.click",
  },
  {
    id: 3,
    title: "JavaScript 基础教程",
    content: "ECMAScript 2015 在 ECMAScript 5 的基础上发生了重大变化",
    link: "https://space.bilibili.com/302954484?type=series",
  },
]);

const total = computed(() => blogs.value.length);

const showTotal = ref(true);

function toggleTotal() {
  showTotal.value = !showTotal.value;
}

onMounted(() => {
  document.body.classList.add('dark-mode');
});

const initialBlogForm = {
  title: "",
  content: "",
  link: "",
};

const blogForm = ref({ ...initialBlogForm });

function addPost() {
  blogs.value.push({
    id: blogs.value.length + 1,
    ...blogForm.value,
  });
  blogForm.value = { ...initialBlogForm };
}

function handleTitleClick(title) {
  console.log(title);
}
</script>

<template>
  <div class="dark-mode">
    <header>
      <h1>博客列表</h1>
    </header>

    <main>
      <div class="blog-list">
        <BlogPost
          @titleClick="handleTitleClick"
          v-for="blog in blogs"
          :key="blog.id"
          v-bind="blog"
        >
          <button class="share-button">分享到微信</button>
        </BlogPost>
        <h3 v-if="showTotal" class="total-count">总共 {{ total }} 篇</h3>
        <button class="toggle-button" @click="toggleTotal">{{ showTotal ? "隐藏" : "显示" }}总数</button>
      </div>

      <form @submit.prevent="addPost" class="blog-form">
        <h2>添加新博客</h2>
        <div class="form-group">
          <label for="blogTitle">博客标题</label>
          <input type="text" id="blogTitle" v-model="blogForm.title" required />
        </div>
        
        <div class="form-group">
          <label for="content">内容</label>
          <textarea
            id="content"
            cols="30"
            rows="5"
            v-model="blogForm.content"
            required
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="link">链接</label>
          <input type="text" id="link" v-model="blogForm.link" required />
        </div>
        
        <button type="submit" class="submit-button">提交</button>
      </form>
    </main>
  </div>
</template>

<style>
:root {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --card-bg: #2d2d2d;
  --button-bg: #3a70b2;
  --button-text: #f0f0f0;
  --border-color: #444444;
  --input-bg: #333333;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}
</style>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--card-bg);
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  main {
    grid-template-columns: 3fr 2fr;
  }
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.total-count {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--text-color);
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  opacity: 0.9;
}

.toggle-button {
  align-self: flex-start;
  margin-bottom: 1rem;
}

.share-button {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  padding: 0.3rem 0.7rem;
}

.blog-form {
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--text-color);
}

.submit-button {
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
}
</style>
