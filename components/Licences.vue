<template>
  <div class="licences">
    <SectionTitle :title="$t('licences.title')" />
    <div v-for="licence in $t('licences.licences')" :key="licence">
      {{ licence }}
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
export default {
  name: 'Licences',
  components: { SectionTitle },
  data() {
    return {
      licences: ['A - Moto', 'B - Véhicule léger'],
    }
  },
}
</script>

<style scoped>
.licences {
  display: block;
}
</style>
