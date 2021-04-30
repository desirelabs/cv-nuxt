<template>
  <div>
    <div class="layout">
      <Sidebar>
        <Identity />
        <Title />
      </Sidebar>
      <Main> <Caption /> </Main>
    </div>
    <div class="layout">
      <Sidebar>
        <Coordinates />
        <Skills />
        <Licences />
        <Hobbies
      /></Sidebar>
      <Main> <Experiences /></Main>
    </div>
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
.layout {
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  max-width: 1140px;
}
@media (max-width: 767px) {
  .layout {
    flex-wrap: wrap;
  }
}
</style>
