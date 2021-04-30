<template>
  <div class="main"><slot></slot></div>
</template>

<script>
export default {
  name: "Main",
}
</script>

<style scoped>
.main {
  padding: 0 1.875rem;
  min-width: 65%;
}
</style>
