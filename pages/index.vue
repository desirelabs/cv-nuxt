<template>
  <div class="container">
    <div>
      <h1 class="title">Franck LEBAS<br />Curriculum vitæ</h1>
      <div class="links">
        <NuxtLink to="/english">English</NuxtLink>
        <NuxtLink to="/français">Français</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
