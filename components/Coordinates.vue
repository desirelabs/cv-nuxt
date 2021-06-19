<template>
  <div class="coordinates">
    <SectionTitle :title="$t('coordinate.title')" />
    <Address />
    <Email :mailto="$t('coordinate.email')" />
    <Phone :tel="$t('coordinate.phone')" />
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import Address from '@/components/Address'
import Email from '@/components/Email'
import Phone from '@/components/Phone'
export default {
  name: 'Coordinates',
  components: {
    SectionTitle,
    Address,
    Email,
    Phone,
  },
}
</script>

<style scoped>
.coordinates {
  display: block;
}
</style>
