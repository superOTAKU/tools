<template>
<div>
  <v-tabs v-model="activeTab" align-tabs="center" color="primary">
    <v-tab value="all">全部</v-tab>
    <v-tab value="develop">开发类</v-tab>
    <v-tab value="image">图片类</v-tab>
  </v-tabs>
  <!--按分类展示-->
  <div class="text-h6 my-5">开发</div>
  <div class="wrapper">
    <v-sheet class="d-flex flex-column align-center justify-center pa-5" style="cursor: pointer;">
      <v-icon icon="mdi-clock-time-five-outline" :size="80"></v-icon>
      <div class="text-subtitle-2 mt-2">时间戳转换</div>
    </v-sheet>
  </div>
  <div class="text-h6 my-5">图片</div>
  <div class="wrapper">
    <v-sheet class="d-flex flex-column align-center justify-center pa-5" style="cursor: pointer;">
      <v-icon icon="mdi-image" :size="80"></v-icon>
      <div class="text-subtitle-2 mt-2">图片格式转换</div>
    </v-sheet>
  </div>
</div>
</template>

<script setup>
  import { ref } from 'vue';
  const activeTab = ref('all')

</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1025px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .v-sheet {
      margin: 10px;
    }
  }
</style>
