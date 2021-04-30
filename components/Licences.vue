<template>
  <div class="licences">
    <SectionTitle title="Permis de conduire" />
    <div v-for="licence in licences" :key="licence">
      {{ licence }}
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle"
export default {
  name: "Licences",
  components: { SectionTitle },
  data() {
    return {
      licences: ["A - Moto", "B - Véhicule léger"],
    }
  },
}
</script>

<style scoped>
.licences {
  display: block;
}
</style>
