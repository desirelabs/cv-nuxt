<template>
  <div class="level-bar">
    <span v-for="lvl in computedLevels[level]" :key="lvl" class="icon-wrapper">
      <img
        v-if="lvl === 0"
        src="@/assets/0.svg"
        width="24"
        height="24"
        alt=""
      />
      <img
        v-if="lvl === 1"
        src="@/assets/1.svg"
        width="24"
        height="24"
        alt=""
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "LevelBar",
  props: {
    level: Number(0),
  },
  data() {
    return {
      star: "@/assets/1.svg",
      star_empty: "@/assets/0.svg",
      computedLevels: {
        0: [0, 0, 0, 0],
        1: [1, 0, 0, 0],
        2: [1, 1, 0, 0],
        3: [1, 1, 1, 0],
        4: [1, 1, 1, 1],
        5: [1, 1, 1, 1],
      },
    }
  },
}
</script>

<style scoped>
.level-bar {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
