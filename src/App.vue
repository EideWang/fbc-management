<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BottomNav from './components/BottomNav.vue'
import { ref, onMounted } from 'vue'
import liff from '@line/liff'

const message = ref('')
const error = ref('')

onMounted(async () => {
  try {
    // 初始化 LIFF
    await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID,
    })
    message.value = 'LIFF init succeeded.'
  } catch (e) {
    message.value = 'LIFF init failed.'
    error.value = `${e}`
  }
})
</script>

<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
    <BottomNav />
  </v-app>
</template>

<style scoped></style>
