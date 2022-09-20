<script setup>
import { ref, computed } from "vue";
import BlogPost from "./components/BlogPost.vue";

const blogs = ref([
  {
    id: 1,
    title: "Vue 3 基础教程",
    content: "Vue 3 在 Vue 2 的基础上发生了重大变化",
    link: "/vue-3-tutorial",
  },
  {
    id: 2,
    title: "React 18 基础教程",
    content: "React 18 在 React 17 的基础上发生了重大变化",
    link: "/react-18-tutorial",
  },
  {
    id: 3,
    title: "JavaScript 基础教程",
    content: "ECMAScript 2015 在 ECMAScript 5 的基础上发生了重大变化",
    link: "/javascript-tutorial",
  },
]);

const total = computed(() => blogs.value.length);

const showTotal = ref(true);

function toggleTotal() {
  showTotal.value = !showTotal.value;
}

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
  <BlogPost
    @titleClick="handleTitleClick"
    v-for="blog in blogs"
    :key="blog.id"
    v-bind="blog"
  >
    <button>分享到微信</button>
  </BlogPost>
  <h3 v-if="showTotal">总共 {{ total }} 篇</h3>
  <button @click="toggleTotal">{{ showTotal ? "隐藏" : "显示" }}总数</button>
  <form @submit.prevent="addPost">
    <label for="blogTitle">博客标题</label>
    <input type="text" id="blogTitle" v-model="blogForm.title" />
    <label for="content">内容</label>
    <textarea
      id="content"
      cols="30"
      rows="10"
      v-model="blogForm.content"
    ></textarea>
    <label for="link">链接</label>
    <input type="text" id="link" v-model="blogForm.link" />
    <button type="submit">提交</button>
  </form>
</template>

<style scoped>
form {
  display: grid;
  margin-top: 2em;
}
</style>
