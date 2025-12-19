<template>
  <div class="home">
    <router-link v-for="item in pages" :key="item.url" :to="{ path: item.url }">
      {{item.name}}
    </router-link>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
const pages = ref([
  {
    name: '资源',
    url: '/voyage/resource'
  },
  {
    name: '答题',
    url: '/voyage/answer'
  },
  {
    name: '水系',
    url: '/voyage/landscape'
  },
  {
    name: '气候',
    url: '/voyage/climate'
  },
  {
    name: '历史',
    url: '/voyage/history'
  },
  {
    name: '文学戏剧',
    url: '/voyage/literaryDrama'
  }
])


</script>
<style scoped>
a{
  display: block;
  font-size: 40px;
  padding: 20px;
  background-color: #c7daf8;
  margin-bottom: 20px;
}
</style>

