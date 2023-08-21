<template>
<v-breadcrumbs :items="items"/>
</template>

<script setup>
import {ref} from 'vue'
import {getToolById} from '@/api/modules/tool'
import {getCatalogById} from '@/api/modules/catalog'

const props = defineProps({
  toolId: Number
})

const items = ref([])

getToolById(props.toolId).then(async (tool) => {
  const list = [
    {
      title: '全部',
      to: '/',
      exact: true
    }
  ]
  const catalog = await getCatalogById(tool.catalogId)
  list.push({
    title: catalog.name,
    to: '/?catalogId=' + tool.catalogId,
    exact: true
  })
  list.push({
    title: tool.name,
    disabled: true
  })
  items.value = list
})

</script>

