<template>
  <div class="default">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'

export default Vue.extend({
  components: {
    AppHeader,
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.default {
  color: $text-color;
}
</style>
