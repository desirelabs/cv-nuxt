<template>
  <div class="coordinates">
    <SectionTitle title="Coordonnées" />
    <Address />
    <br />
    <Email mailto="francklebas@protonmail.ch" />
    <br />
    <Phone tel="0698054772" />
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle"
import Address from "@/components/Address"
import Email from "@/components/Email"
import Phone from "@/components/Phone"
export default {
  name: "Coordinates",
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
