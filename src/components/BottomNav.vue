<template>
  <v-bottom-navigation :elevation="2" grow>
    <v-btn to="/machine-management">
      <v-icon icon="mdi-map-marker"></v-icon>
      <span>機台管理</span>
    </v-btn>

    <v-btn to="/sales-records">
      <v-icon icon="mdi-point-of-sale"></v-icon>
      <span>銷售紀錄</span>
    </v-btn>

    <v-btn to="/event-logs">
      <v-icon icon="mdi-calendar-edit"></v-icon>
      <span>事件紀錄</span>
    </v-btn>
  </v-bottom-navigation>
</template>
