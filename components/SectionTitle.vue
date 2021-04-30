<template>
  <h3>{{ title.charAt(0).toUpperCase() + title.slice(1) }}</h3>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String(""),
  },
}
</script>

<style scoped>
h3 {
  text-transform: uppercase;
  color: #458588;
  margin-block-start: 1em;
  margin-block-end: 1em;
}
</style>
