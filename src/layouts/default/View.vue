<template>
  <v-main>
    <v-container style="max-width: 1200px; position: relative;">
      <router-view />
      <div style="position: absolute; right: 90px;" v-if="showTopBtn" @click="onTopBtnClicked">
        <v-tooltip text="滑动到顶部">
          <template #activator="{props}">
            <v-btn size="large" icon="mdi-arrow-up" color="primary" v-bind="props" style="position: fixed; bottom: 10px;"/>
          </template>
        </v-tooltip>
      </div>
    </v-container>
  </v-main>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  const showTopBtn = ref(false)

  const onTopBtnClicked = () => {
    const element = document.documentElement || document.body;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onMounted(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = Number(document.body.scrollTop || document.documentElement.scrollTop);
      if (scrollTop > 0 && !showTopBtn.value) {
        showTopBtn.value = true;
      } else if (scrollTop === 0) {
        showTopBtn.value = false
      }
    })
  })
</script>
