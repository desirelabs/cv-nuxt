<template>
  <nav><slot></slot></nav>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style scoped>
nav {
  padding: 0 1.875rem;
  background-color: #fdcd3b;
  min-width: 35%;
}
</style>
