<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" text="ボタン" />
        <p class="content__text">ボタンの一覧です。</p>
      </section>
      <section>
        <PageLinks
          :prev="{
            title: 'フラッシュメッセージ',
            to: '/works/components/flashMessage',
          }"
          :next="{ title: '見出し', to: '/works/components/heading' }"
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
