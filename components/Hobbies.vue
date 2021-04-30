<template>
  <div class="hobbies">
    <SectionTitle title="Centres d'intérêt" />
    <div v-for="hobby in hobbies" :key="hobby">{{ hobby }}</div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle"

export default {
  name: "Hobbies",
  components: { SectionTitle },
  data() {
    return {
      hobbies: ["Famille", "Cuisine", "Jeux vidéo", "Cinéma", "Coder"],
    }
  },
}
</script>

<style scoped>
.hobbies {
  display: block;
}
</style>
