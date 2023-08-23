<template>
<div>
  <ToolsBreadcrumb :tool-id="3"/>
</div>
<v-sheet class="pa-4 ma-4" rounded color="white">
  <v-textarea label="内容" auto-grow variant="solo" v-model="content" clearable></v-textarea>
  <div class="d-flex">
    <v-btn color="primary" @click="onBase64EncodeBtnClicked" class="mr-2">Base64编码</v-btn>
    <v-btn color="primary" @click="onBase64DecodeBtnClicked" class="mr-2">Base64解码</v-btn>
    <v-btn color="primary" class="mr-2" @click="onMd5BtnClicked">MD5</v-btn>
    <v-btn color="primary" class="mr-2" @click="onSha256BtnClicked">SHA256</v-btn>
  </div>
</v-sheet>
</template>

<script setup>
  import ToolsBreadcrumb from '@/components/ToolBreadcrumbs.vue'

  import {ref} from 'vue'
  import CryptoJS from 'crypto-js'

  const content = ref('')

  const onBase64EncodeBtnClicked = () => {
    content.value = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(content.value))
  }

  const onBase64DecodeBtnClicked = () => {
    content.value = CryptoJS.enc.Base64.parse(content.value).toString(CryptoJS.enc.Utf8)
  }

  const onMd5BtnClicked = () => {
    content.value = CryptoJS.MD5(content.value)
  }

  const onSha256BtnClicked = () => {
    content.value = CryptoJS.SHA256(content.value)
  }
</script>
