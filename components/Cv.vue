<template>
  <div class="main-layout">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
export default {
  name: "Cv",
}
</script>

<style scoped>
body {
  background-color: #fbf4d3;
  padding: 0;
  margin: 0;
}
.main-layout {
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 1.875rem;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
}
</style>
