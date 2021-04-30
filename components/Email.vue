<template>
  <a class="email" :href="'mailto:' + mailto">{{ mailto }}</a>
</template>

<script>
export default {
  name: "Email",
  props: {
    mailto: String(""),
  },
}
</script>

<style scoped>
.email {
  display: inline;
}
</style>
