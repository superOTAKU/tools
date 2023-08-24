<template>
  <v-app-bar flat :border="true" density="compact" color="primary">
    <template #title>
      <v-container class="d-flex align-center pa-2 justify-space-between">
        <div class="d-flex align-center">
          <img :src="Logo" height="25"/>
          <v-btn class="mr-5 text-h6" variant="text" @click="router.push('/')">
            工具屋
          </v-btn>
        </div>
        <v-btn icon="mdi-magnify" @click="searchContent = '';overlay = true"/>
      </v-container>
    </template>
  </v-app-bar>
  <v-overlay v-model="overlay" @click="onOverlayClicked">
    <div style="width: 100vw; height: 100vh;" class="d-flex flex-column align-center justify-center">
      <v-sheet color="white" rounded class="pa-4" style="width: 80%;" @click="onSearchDivClicked">
          <v-text-field variant="solo" label="搜索工具" density="default"
            style="width: 100%;"
            clearable
            hide-details v-model="searchContent"/>
            <div class="mt-2 text-caption" v-if="searchedTools.length > 0">搜索结果：</div>
            <v-list class="mt-2">
              <v-list-item
                v-for="tool in searchedTools"
                :key="tool.id"
                >
                <v-btn :prepend-icon="tool.icon" variant="text" @click="onSearchResultClicked(tool)">{{ tool.name }}</v-btn>
              </v-list-item>
            </v-list>
      </v-sheet>
    </div>
  </v-overlay>
</template>

<script setup>
import Logo from '@/assets/logo.png'

import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'
import {getTools} from '@/api/modules/tool'
const router = useRouter()

const overlay = ref(false)
const searchContent = ref('')
const tools = ref([])

const searchedTools = computed(() => {
  if (!searchContent.value) {
    return []
  }
  return tools.value.filter(tool => tool.name.indexOf(searchContent.value) >= 0)
})

const onSearchDivClicked = (e) => {
  //防止向上传递事件，导致遮罩层关闭
  e.stopPropagation();
}

const onSearchResultClicked = (tool) => {
  router.push(tool.route)
  overlay.value = false
}

const onOverlayClicked = () => {
  overlay.value = false
}

getTools().then(res => {
  tools.value = res
})

</script>
