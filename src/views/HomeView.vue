<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <p>HelloWorld</p>
    <div>
      <h1>{{ message }}</h1>
      <p v-if="error" style="color: red">Error: {{ error }}</p>
      <v-icon icon="mdi-home" />
    </div>
  </main>
</template>
