<template>
  <div>
    <SectionTitle :title="$t('skills.title')" />
    <div v-for="skill in $t('skills.skills')" :key="skill.title">
      <Skill :skill="skill.title" :level="skill.level" />
      <hr />
    </div>
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
  border-bottom: 1px solid var(--blue-400);
}
</style>
