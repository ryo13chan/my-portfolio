<template>
  <div class="components">
    <AppHeader />
    <div class="content">
      <aside class="content__side">サイドバー</aside>
      <div class="content__main">
        <Nuxt />
      </div>
    </div>
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

.components {
  color: $text-color;
}
.content {
  display: flex;
  justify-content: space-between;
  &__side {
    flex: 0 0 260px;
  }
  &__main {
    flex: 1;
  }
}
</style>
