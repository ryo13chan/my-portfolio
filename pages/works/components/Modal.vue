<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" text="モーダル" />
        <p class="content__text">モーダルの一覧です。</p>
      </section>
      <section>
        <PageLinks
          :prev="{ title: '見出し', to: '/works/components/heading' }"
          :next="{ title: 'ラベル', to: '/works/components/label' }"
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
@import '~/assets/scss/components/content.scss';
</style>
