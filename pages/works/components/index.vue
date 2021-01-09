<template>
  <main>
    <article>
      <section class="content">
        <AppHeading
          class="content__title"
          :level="2"
          :text="'コンポーネント集'"
        />
        <p class="content__text">
          ポートフォリオ内で使用しているコンポーネントの一覧です。
        </p>
      </section>
      <section>
        <PageLinks
          :next="{
            title: 'フラッシュメッセージ',
            to: '/works/components/flashMessage',
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
