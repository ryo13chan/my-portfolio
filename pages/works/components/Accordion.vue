<template>
  <main>
    <article>
      <section class="content">
        <AppBreadcrumb :items="breadcrumbItems" />
        <AppHeading class="content__title" :level="2" text="アコーディオン" />
        <p class="content__text">アコーディオンの一覧です。</p>
        <section>
          <AppHeading :level="3" text="基本形" />
          <div class="content__area">
            <AppAccordion title="アコーディオン">
              <template v-slot:body>
                <div class="accordion__body">
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                </div>
              </template>
            </AppAccordion>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="タイトルの表示位置" />
          <div class="content__area">
            <AppAccordion title="タイトル中央寄せ" title-align="center">
              <template v-slot:body>
                <div class="accordion__body">
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                </div>
              </template>
            </AppAccordion>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="表示アニメーション" />
          <div class="content__area">
            <AppAccordion title="ふわっと表示" fade>
              <template v-slot:body>
                <div class="accordion__body">
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                </div>
              </template>
            </AppAccordion>
          </div>
        </section>
      </section>
      <section>
        <PageLinks
          :prev="{ title: 'コンポーネント集', to: '/works/components' }"
          :next="{
            title: 'アバター',
            to: '/works/components/avatar',
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
  showFlashMessage: boolean
  breadcrumbItems: Array<breadcrumbItem>
}

export default Vue.extend({
  layout: 'components',
  data(): Data {
    return {
      showFlashMessage: true,
      breadcrumbItems: [
        { to: '/works', text: '作品集' },
        { to: '/works/components', text: 'コンポーネント集' },
        {
          text: 'アコーディオン',
        },
      ],
    }
  },
  methods: {
    // アラート表示
    alert(text: string) {
      alert(text)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
@import '~/assets/scss/components/content.scss';

.accordion {
  &__body {
    padding: 15px;
  }
}
</style>
