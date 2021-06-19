<template>
  <nav><slot></slot></nav>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
nav {
  padding: 0 1.875rem;
  min-width: 35%;
}
@media print {
  nav {
    break-after: always;
  }
}
</style>
