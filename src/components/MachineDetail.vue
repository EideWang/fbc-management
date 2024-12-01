<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ machine.name }} 詳細資訊</span>
    </v-card-title>
    <v-card-text>
      <div><strong>地區:</strong> {{ machine.region }}</div>
      <div><strong>通路:</strong> {{ machine.channel }}</div>
      <div><strong>狀態:</strong> {{ machine.status }}</div>
      <div><strong>容量:</strong> {{ machine.capacity }}</div>
      <div><strong>最後更新狀態:</strong> {{ machine.lastStatusUpdate }}</div>
      <div><strong>模式:</strong> {{ machine.mode }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    machine: Object, // 傳入機台詳細資料
  },
}
</script>
