<template>
  <main>
    <article>
      <section class="content">
        <AppBreadcrumb :items="breadcrumbItems" />
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
import { breadcrumbItem } from '~/components/AppBreadcrumb.vue'

interface Data {
  breadcrumbItems: Array<breadcrumbItem>
}

export default Vue.extend({
  layout: 'components',
  data() {
    return {
      breadcrumbItems: [
        { to: '/works', text: '作品集' },
        { text: 'コンポーネント集' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
@import '~/assets/scss/components/content.scss';
</style>
