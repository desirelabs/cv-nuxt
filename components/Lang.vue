<template>
  <div class="lang-switch">
    <a
      class="lang-switch-link"
      @click.prevent.stop="$i18n.setLocale($i18n.locale === 'fr' ? 'en' : 'fr')"
    >
      {{ $i18n.locale === "fr" ? $t("languages.eng") : $t("languages.fr") }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Lang",
}
</script>

<style scoped>
.lang-switch {
  position: fixed;
  bottom: 15px;
  right: 15px;
  text-align: right;
}
.lang-switch-link {
  padding: 4px 15px;
  display: block;
  font-weight: bold;
  cursor: pointer;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 9px;
}
.lang a {
  padding: 15px;
  margin: 5px;
  color: var(--blue-400);
  text-decoration: none;
}
@media print {
  .lang-switch {
    display: none;
  }
}
</style>
