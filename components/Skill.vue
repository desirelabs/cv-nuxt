<template>
  <div class="skill">
    <div>{{ skill }}</div>
    <LevelBar :level="level" />
  </div>
</template>

<script>
import LevelBar from "@/components/LevelBar"

export default {
  name: "Skill",
  components: {
    LevelBar,
  },
  props: {
    skill: String(""),
    level: Number(0),
  },
}
</script>

<style scoped>
.skill {
  display: block;
}
</style>
