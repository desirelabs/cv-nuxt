<template>
  <a class="email" :href="'mailto:' + $t('coordinate.email')">{{
    $t("coordinate.email")
  }}</a>
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
  color: #458588;
  font-weight: bold;
}
</style>
