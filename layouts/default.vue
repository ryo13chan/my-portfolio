<template>
  <div class="default">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.default {
  color: $text-color;
}
</style>
