<template>
  <main>
    <article>
      <section class="content">
        <AppHeading class="content__title" :level="2" text="見出し" />
        <p class="content__text">見出しの一覧です。</p>
        <AppHeading class="content__title" :level="3" text="基本形" />
        <div class="content__area">
          <AppHeading :level="1" text="見出し1" />
          <AppHeading :level="2" text="見出し2" />
          <AppHeading :level="3" text="見出し3" />
          <AppHeading :level="4" text="見出し4" />
          <AppHeading :level="5" text="見出し5" />
          <AppHeading :level="6" text="見出し6" />
        </div>
      </section>
      <section>
        <PageLinks
          :prev="{ title: 'ボタン', to: '/works/components/button' }"
          :next="{ title: 'モーダル', to: '/works/components/modal' }"
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
