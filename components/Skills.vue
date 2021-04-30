<template>
  <div>
    <SectionTitle title="Compétences" />
    <Skill skill="HTML5, CSS3, JavaScript, TypeScript" level="4" />
    <hr />
    <Skill skill="ReactJS" level="4" />
    <hr />
    <Skill skill="VueJS" level="3" />
    <hr />
    <Skill skill="Architecture web" level="4" />
    <hr />
    <Skill skill="Méthode AGILE" level="3" />
    <hr />
    <Skill skill="Vim, IntellijIDEA, Visual Studio Code" level="4" />
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle"
import Skill from "@/components/Skill"

export default {
  name: "Skills",
  components: {
    SectionTitle,
    Skill,
  },
}
</script>

<style scoped>
hr {
  border: none;
  border-bottom: 1px solid #2c3e50;
}
</style>
