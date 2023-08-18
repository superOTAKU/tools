<template>
  <v-app-bar flat :border="true" density="compact" color="primary">
    <template #title>
      <v-container class="d-flex align-center pa-2">
        <span class="mr-5">在线工具</span>
        <div style="width: 200px;" class="d-flex align-center">
          <v-text-field density="compact" hide-details variant="solo-filled" bg-color="grey-lighten-5" append-inner-icon="mdi-magnify"/>
        </div>
      </v-container>
    </template>
  </v-app-bar>
</template>
