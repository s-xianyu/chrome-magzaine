<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style lang="scss" scoped>
.title{
  margin:0;
}
</style>
