<template>
  <div class="main">
    <Caption />
    <br />
    <Experiences />
  </div>
</template>

<script>
import Caption from "@/components/Caption"
import Experiences from "@/components/Experiences"

export default {
  name: "Main",
  components: {
    Caption,
    Experiences,
  },
}
</script>

<style scoped>
.main {
  padding: 1.875rem 1.875rem 1.875rem 0;
}
</style>
