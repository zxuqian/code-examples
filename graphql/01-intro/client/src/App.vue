<template>
  <div v-if="loading">loading...</div>
  <ul v-else>
    <li v-for="blog in result.blogs" :key="blog.id">
      {{ blog.title }} - {{ blog.content }}
    </li>
  </ul>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { gql } from "graphql-tag";

const { result, loading } = useQuery(gql`
  query AllBlogs {
    blogs {
      id
      title
      content
    }
  }
`);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
