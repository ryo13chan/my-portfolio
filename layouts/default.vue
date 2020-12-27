<template>
  <div>
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
