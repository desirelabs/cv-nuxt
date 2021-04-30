<template>
  <div class="print">
    <a class="print-link" @click.prevent.stop="window.print()">{{
      $t("print")
    }}</a>
  </div>
</template>

<script>
export default {
  name: "Print",
}
</script>

<style scoped>
.print {
  position: fixed;
  bottom: 15px;
  left: 15px;
  text-align: left;
}
.print-link {
  padding: 4px 15px;
  display: block;
  font-weight: bold;
  cursor: pointer;
  color: var(--blue-400);
  text-decoration: none;
}
@media print {
  .print {
    display: none;
  }
}
</style>
