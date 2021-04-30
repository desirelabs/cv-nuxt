<template>
  <nav>
    <Identity />
    <Title />
    <Coordinates />
    <Skills />
    <Licences />
    <Hobbies />
  </nav>
</template>

<script>
import Identity from "@/components/Identity.vue"
import Title from "@/components/Title"
import Coordinates from "@/components/Coordinates"
import Skills from "@/components/Skills"
import Licences from "@/components/Licences"
import Hobbies from "@/components/Hobbies"

export default {
  name: "Sidebar",
  components: {
    Hobbies,
    Identity,
    Title,
    Coordinates,
    Skills,
    Licences,
  },
}
</script>

<style scoped>
nav {
  padding: 1.875rem;
  background-color: #fbf1c1;
}
</style>
