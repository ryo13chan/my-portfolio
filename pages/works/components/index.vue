<template>
  <main>
    <article>
      <section class="content">
        <AppHeading class="content__title" :level="2" text="コンポーネント集" />
        <p class="content__text">
          ポートフォリオ内で使用しているコンポーネントの一覧です。
        </p>
      </section>
      <section>
        <PageLinks
          :next="{
            title: 'アコーディオン',
            to: '/works/components/accordion',
          }"
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
