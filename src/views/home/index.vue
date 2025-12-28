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
    name: '答题',
    url: '/voyage/answer'
  },
  {
    name: '水系',
    url: '/voyage/landscape'
  },
  {
    name: '资源',
    url: '/voyage/resource'
  },
  {
    name: '气候',
    url: '/voyage/climate'
  },
  {
    name: '横向',
    url: '/voyage/horizontal'
  },
  {
    name: '竖向',
    url: '/voyage/vertical'
  },
   {
    name: '历史',
    url: '/voyage/history'
  },
  {
    name: '史前回响',
    url: '/voyage/sqhx'
  },
  // {
  //   name: '文学戏剧',
  //   url: '/voyage/literaryDrama'
  // },
  // {
  //   name: '新中国',
  //   url: '/voyage/newChina'
  // },
  // {
  //   name: '民俗',
  //   url: '/voyage/folkways'
  // }
])


</script>
<style scoped>
a{
  display: block;
  font-size: 20px;
  padding: 20px;
  background-color: rgba(199, 218, 248, 0.65);
  margin-bottom: 20px;
}
</style>

