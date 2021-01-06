<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" :text="'モーダル'" />
        <p class="content__text">モーダルの一覧です。</p>
      </section>
      <section>
        <PageLinks
          :prev="{ title: '見出し', to: '/works/components/heading' }"
        />
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'components',
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
.content {
  max-width: 1230px;
  padding: 20px 15px;
  margin-right: auto;
  margin-left: auto;
  &__text {
    font-size: 1.5rem;
  }
}
</style>
