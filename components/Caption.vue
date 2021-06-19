<template>
  <blockquote>&laquo;{{ $t('quote') }}&raquo;</blockquote>
</template>

<script>
export default {
  name: 'Caption',
}
</script>

<style scoped>
blockquote {
  margin-top: 0;
  margin-left: 0;
  font-size: 1.8rem;
  font-style: italic;
}
@media print {
  blockquote {
    font-size: 1.3rem;
    margin: 1rem 0 0 2.5rem;
  }
}
</style>
