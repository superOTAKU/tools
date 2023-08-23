<template>
  <v-app-bar flat :border="true" density="compact" color="primary">
    <template #title>
      <v-container class="d-flex align-center pa-2 justify-space-between">
        <v-btn class="mr-5 text-h6" variant="text" @click="router.push('/')">在线工具</v-btn>
        <v-btn icon="mdi-magnify"/>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

</script>
