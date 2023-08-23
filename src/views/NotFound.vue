<template>
  <v-container>
    <v-sheet class="pa-4 ma-4 d-flex flex-column align-center" rounded color="grey-lighten-5">
      <img :src="image"/>
      <div class="mt-4">页面不存在</div>
      <v-btn class="mt-4" color="primary" @click="onBtnClicked">返回首页</v-btn>
    </v-sheet>
  </v-container>
</template>

<script setup>
import image from '@/assets/404.gif'
import {useRouter} from 'vue-router'
const router = useRouter()

const onBtnClicked = () => {
  router.push('/')
}
</script>
