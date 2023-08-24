<template>
<div>
  <tool-breadcrumbs :tool-id="4"/>
  <v-sheet rounded class="pa-4 ma-4">
    <div class="d-flex">
      <span style="min-width: 120px; text-align: right;" class="mr-2">UUID版本：</span>
      <v-radio-group v-model="config.version" inline hide-details>
        <v-radio label="Version1" :value="1" class="mr-4"/>
        <v-radio label="Version4" :value="4"/>
      </v-radio-group>
    </div>
    <div class="d-flex mt-4">
      <span style="min-width: 120px; text-align: right;" class="mr-2">大小写：</span>
      <v-radio-group v-model="config.upperCase" inline hide-details>
        <v-radio label="大写" :value="true" class="mr-4"/>
        <v-radio label="小写" :value="false"/>
      </v-radio-group>
    </div>
    <div class="d-flex mt-4">
      <span style="min-width: 120px; text-align: right;" class="mr-2">包含 - ：</span>
      <v-radio-group v-model="config.hasHyphen" inline hide-details>
        <v-radio label="是" :value="true" class="mr-4"/>
        <v-radio label="否" :value="false"/>
      </v-radio-group>
    </div>
    <div class="d-flex mt-4">
      <span style="min-width: 120px; text-align: right;" class="mr-2">生成个数：</span>
      <div style="width: 150px;">
        <v-text-field type="number" v-model.number="config.count" variant="solo" hide-details/>
      </div>
    </div>
    <div class="d-flex mt-4">
      <span style="min-width: 120px; text-align: right;" class="mr-2"></span>
      <v-btn color="primary" :loading="loading" @click="onGenBtnClicked">生成UUID</v-btn>
    </div>

    <v-card class="mt-4" v-if="uuidList.length > 0">
      <v-card-title>
        <span class="text-subtitle-1 mr-2">生成结果</span>
        <v-btn size="small" variant="outlined" color="primary" @click="onCopyAllBtnClicked" class="copyAll">复制全部</v-btn>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="uuid in uuidList" :key="uuid">
            <span class="mr-1">{{ uuid }}</span>
            <v-btn size="small" variant="text" prepend-icon="mdi-content-copy" class="copyOne" @click="onCopyBtnClicked(uuid)"/>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-sheet>
  <v-snackbar v-model="snackbar.show" location="top" close-delay="200" :color="snackbar.color">
    {{ snackbar.message }}
  </v-snackbar>
</div>
</template>

<script setup>
import ToolBreadcrumbs from '@/components/ToolBreadcrumbs.vue'

import {reactive, ref} from 'vue'
import {v4 as uuidV4, v1 as uuidV1} from 'uuid'
import Clipboard from 'Clipboard'

const snackbar = ref({
    show: false,
    message: null,
    color: null,
  })

const config = reactive({
  version: 4,
  upperCase: false,
  hasHyphen: true,
  count: 5
})

const loading = ref(false)

const uuidList = ref([])

const onGenBtnClicked = () => {
  if (config.count <= 0) {
    return
  }
  loading.value = true
  uuidList.value = []
  const list = []
  for (let i = 0; i < config.count; i++) {
    list.push(genUUID())
  }
  uuidList.value = list
  loading.value = false
}

const genUUID = () => {
  const uuidFunc = config.version === 1 ? uuidV1 : uuidV4
  let result = uuidFunc()
  if (config.upperCase) {
    result = result.toUpperCase()
  }
  if (!config.hasHyphen) {
    result = result.replaceAll('-', '')
  }
  return result
}

const onCopyAllBtnClicked = () => {
  onContentCopy(".copyAll", uuidList.value.join('\n'))
}

const onCopyBtnClicked = (uuid) => {
  onContentCopy(".copyOne", uuid)
}

const onContentCopy = (selector, content) => {
  const clipboard = new Clipboard(selector, {text: () => content})
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
