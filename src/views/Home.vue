<template>
<div>
  <v-tabs v-model="activeTabId" align-tabs="center" color="primary">
    <v-tab v-for="catalog in allCatalogList" :value="catalog.id" :key="catalog.id">
      {{ catalog.name }}
    </v-tab>
  </v-tabs>
  <v-sheet rounded color="white" class="pa-4 ma-4">
    <template v-for="catalog in selectedCatalogs" :key="catalog.id">
      <div class="text-h6 my-5">{{ catalog.name }}</div>
      <div class="wrapper">
        <v-sheet rounded
          class="d-flex flex-column align-center justify-center pa-5 bg-grey-lighten-5"
          style="cursor: pointer;"
          v-for="tool in getToolsByCatalogId(catalog.id)"
          @click="onToolClicked(tool)"
          :key="tool.id"
          >
          <v-icon :icon="tool.icon" :size="80"></v-icon>
          <div class="text-subtitle-2 mt-2">{{ tool.name }}</div>
        </v-sheet>
      </div>
    </template>
  </v-sheet>
</div>
</template>

<script setup>
const allCatalogId = -1
const allCatalog = {
  id: allCatalogId,
  name: '全部'
}

import {getTools} from '@/api/modules/tool'
import {getCatalogs} from '@/api/modules/catalog'
import {ref, computed} from 'vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const tools = ref([])
const catalogs = ref([])

const activeTabId = ref(allCatalogId)

const selectedCatalogs = computed(() => {
  if (activeTabId.value === allCatalogId) {
    return catalogs.value
  } else {
    return catalogs.value.filter(e => e.id === activeTabId.value)
  }
})

const allCatalogList = computed(() => {
  return [allCatalog, ...catalogs.value]
})

const getToolsByCatalogId = (catalogId) => {
  return tools.value.filter(e => e.catalogId === catalogId)
}

const onToolClicked = (tool) => {
  router.push(tool.route)
}

const catalogId = Number(route.query.catalogId)

getTools().then(res => {
  tools.value = res
})

getCatalogs().then(res => {
  catalogs.value = res
  if (catalogId === allCatalogId || catalogs.value.find(e => e.id === catalogId)) {
    activeTabId.value = catalogId
  }
})



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
