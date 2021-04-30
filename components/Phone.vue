<template>
  <a class="phone" :href="'tel:' + tel">{{ tel }}</a>
</template>

<script>
export default {
  name: "Phone",
  props: {
    tel: String(""),
  },
}
</script>

<style scoped>
.phone {
  display: block;
  color: #458588;
  font-weight: bold;
}
</style>
