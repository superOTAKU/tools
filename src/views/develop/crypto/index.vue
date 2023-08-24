<template>
<div>
  <ToolsBreadcrumb :tool-id="3"/>
</div>
<v-sheet class="pa-4 ma-4" rounded color="white">
  <div style="position: relative;">
    <v-textarea @focus="isFocusing = true" @blur="isFocusing = false" label="内容" @mouseover="onMouseEnterText" @mouseleave="onMouseLeaveText" auto-grow variant="solo" v-model="content" clearable></v-textarea>
    <v-tooltip text="复制内容"
        v-if="(isHovering || isFocusing) && content"
        location="start"
        >
      <template v-slot:activator="{ props }">
        <v-btn variant="text" size="x-small"
          style="position: absolute; right: 40px; top: 5px;"
          @mouseover="onMouseEnterBtn" @mouseleave="onMouseLeaveBtn"
          v-bind="props"
          icon="mdi-content-copy"
          class="copy-btn"
          @click="onCopyBtnClicked"
          ></v-btn>
      </template>
    </v-tooltip>
  </div>
  <div class="d-flex flex-wrap">
    <v-btn color="primary" @click="onBase64EncodeBtnClicked" class="mr-2 my-2">Base64编码</v-btn>
    <v-btn color="primary" @click="onBase64DecodeBtnClicked" class="mr-2 my-2">Base64解码</v-btn>
    <v-btn color="primary" class="mr-2 my-2" @click="onMd5BtnClicked">MD5</v-btn>
    <v-btn color="primary" class="mr-2 my-2" @click="onSha256BtnClicked">SHA256</v-btn>
    <v-btn color="primary" class="mr-2 my-2" @click="onURLEncodeBtnClicked">URL编码</v-btn>
    <v-btn color="primary" class="mr-2 my-2" @click="onURLDecodeBtnClicked">URL解码</v-btn>
  </div>
</v-sheet>
<v-snackbar v-model="snackbar.show" location="top" close-delay="200" :color="snackbar.color">
  {{ snackbar.message }}
</v-snackbar>
</template>

<script setup>
  import ToolsBreadcrumb from '@/components/ToolBreadcrumbs.vue'

  import {ref} from 'vue'
  import CryptoJS from 'crypto-js'
  import Clipboard from 'Clipboard'

  const content = ref('')
  const isHovering = ref(false)
  const isFocusing = ref(false)

  const snackbar = ref({
    show: false,
    message: null,
    color: null,
  })

  let insideBtn = false
  const onMouseEnterText = () => {
    if (isHovering.value) {
      return
    }
    isHovering.value = true
  }

  const onMouseLeaveText = () => {
    setTimeout(() => {
      if (!insideBtn) {
        isHovering.value = false
      }
    }, 100);
  }

  const onMouseEnterBtn = () => {
    insideBtn = true
  }

  const onMouseLeaveBtn = () => {
    insideBtn = false
  }

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

  const onURLEncodeBtnClicked = () => {
    content.value = encodeURIComponent(content.value)
  }

  const onURLDecodeBtnClicked = () => {
    content.value = decodeURIComponent(content.value)
  }

  const onCopyBtnClicked = () => {
    const clipboard = new Clipboard(".copy-btn", {text: () => content.value})
    clipboard.on('success', () => {
      snackbar.value = {
        show: true,
        color: 'success',
        message: '复制成功！'
      }
    })
    clipboard.on('error', () => {
      snackbar.value = {
        show: true,
        color: 'error',
        message: '复制失败！'
      }
    })
  }
</script>
