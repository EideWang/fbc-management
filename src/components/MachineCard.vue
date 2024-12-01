<template>
  <v-card class="machine-card" @click="viewDetails">
    <v-card-title>
      <v-row>
        <v-col cols="10" class="machine-name">({{ machine.channel }}){{ machine.name }}</v-col>
        <v-col cols="2" class="mode-font d-flex align-end">{{ machine.mode }}</v-col>
      </v-row>
    </v-card-title>
    <v-card-subtitle>最後更新於：{{ machine.lastStatusUpdate }}</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="3">{{ machine.status }}</v-col>
        <v-col cols="3">{{ machine.region }}</v-col>
        <v-col cols="6">剩餘容量：{{ machine.capacity }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-divider :thickness="3"></v-divider>
</template>

<script>
export default {
  props: {
    machine: {
      type: Object,
      required: true,
    },
  },
  emits: ['view-details'],
  methods: {
    viewDetails() {
      console.log('view detail')
      this.$emit('view-details', this.machine)
    },
  },
}
</script>

<style scoped>
.machine-card {
  width: 100%;
  margin-bottom: 16px;
}
.mode-font {
  font-size: 0.875rem;
}
.machine-name {
  max-width: 100%; /* 限制最大寬度為100% */
  white-space: normal; /* 讓文本換行 */
  word-wrap: break-word; /* 允許長單詞換行 */
  word-break: break-word; /* 確保單詞在容器邊界內換行 */
}
</style>
