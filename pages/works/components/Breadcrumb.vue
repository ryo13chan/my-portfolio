<template>
  <main>
    <article>
      <section class="content">
        <AppBreadcrumb :items="breadcrumbItems" />
        <AppHeading class="content__title" :level="2" text="パンくずリスト" />
        <p class="content__text">パンくずリストの一覧です。</p>
        <section>
          <AppHeading :level="3" text="基本形" />
          <div class="content__area">
            <AppBreadcrumb :items="breadcrumbItems" />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="外部リンク" />
          <div class="content__area">
            <AppBreadcrumb :items="breadcrumbLinkItems" />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="区切り文字を変更" />
          <div class="content__area">
            <AppBreadcrumb :items="breadcrumbDelimiterItems" delimiter="→" />
          </div>
        </section>
      </section>
      <section>
        <PageLinks
          :prev="{
            title: 'アコーディオン',
            to: '/works/components/accordion',
          }"
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
import { breadcrumbItem } from '~/components/AppBreadcrumb.vue'

interface Data {
  breadcrumbItems: Array<breadcrumbItem>
  breadcrumbLinkItems: Array<breadcrumbItem>
  breadcrumbDelimiterItems: Array<breadcrumbItem>
}

export default Vue.extend({
  layout: 'components',
  data(): Data {
    return {
      breadcrumbItems: [
        { to: '/works', text: '作品集' },
        { to: '/works/components', text: 'コンポーネント集' },
        {
          text: 'パンくずリスト',
        },
      ],
      breadcrumbLinkItems: [
        { to: '/', text: 'ホーム' },
        { href: 'https://www.google.co.jp/', target: '_blank', text: 'Google' },
        {
          text: 'パンくずリスト',
        },
      ],
      breadcrumbDelimiterItems: [
        { to: '/works', text: '作品集' },
        { to: '/works/components', text: 'コンポーネント集' },
        {
          text: 'パンくずリスト',
        },
      ],
    }
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
@import '~/assets/scss/components/content.scss';
</style>
