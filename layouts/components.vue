<template>
  <div class="components">
    <AppHeader />
    <div class="content">
      <SideMenu />
      <div class="content__main">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.components {
  color: $text-color;
}
.content {
  display: flex;
  justify-content: space-between;
  &__main {
    flex: 1;
  }
}
</style>
