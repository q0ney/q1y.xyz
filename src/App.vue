<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <RouterView />
</template>

<style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
 }

 html {
  scroll-behavior: smooth;
 }

 ::-webkit-scrollbar {
  width: 10px;
  background-color: #1c1c1c;
 }

 ::-webkit-scrollbar-thumb {
  background: #303030;
}
</style>