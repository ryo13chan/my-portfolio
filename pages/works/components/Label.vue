<template>
  <main>
    <article>
      <section class="content">
        <AppBreadcrumb :items="breadcrumbItems" />
        <AppHeading class="content__title" :level="2" text="ラベル" />
        <p class="content__text">ラベルの一覧です。</p>
        <section>
          <AppHeading :level="3" text="基本形" />
          <div class="content__area">
            <div class="labels">
              <AppLabel
                class="labels__item"
                text="Primary label"
                variant="primary"
              />
              <AppLabel
                class="labels__item"
                text="Secondary label"
                variant="secondary"
              />
              <AppLabel
                class="labels__item"
                text="Success label"
                variant="success"
              />
              <AppLabel
                class="labels__item"
                text="Danger label"
                variant="danger"
              />
              <AppLabel
                class="labels__item"
                text="Warning label"
                variant="warning"
              />
              <AppLabel class="labels__item" text="Info label" variant="info" />
              <AppLabel
                class="labels__item"
                text="Light label"
                variant="light"
              />
              <AppLabel class="labels__item" text="Dark label" variant="dark" />
            </div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="大きさ" />
          <div class="content__area">
            <AppLabel class="labels__item" text="Small" size="sm" />
            <AppLabel class="labels__item" text="デフォルト" />
            <AppLabel class="labels__item" text="Large" size="lg" />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="outline" />
          <div class="content__area">
            <div class="labels">
              <AppLabel
                class="labels__item"
                text="Primary outline label"
                variant="primary"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Secondary outline label"
                variant="secondary"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Success outline label"
                variant="success"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Danger outline label"
                variant="danger"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Warning outline label"
                variant="warning"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Info outline label"
                variant="info"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Light outline label"
                variant="light"
                outline
              />
              <AppLabel
                class="labels__item"
                text="Dark outline label"
                variant="dark"
                outline
              />
            </div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="round" />
          <div class="content__area">
            <div class="labels">
              <AppLabel
                class="labels__item"
                text="Primary round label"
                variant="primary"
                round
              />
              <AppLabel
                class="labels__item"
                text="Secondary round label"
                variant="secondary"
                round
              />
              <AppLabel
                class="labels__item"
                text="Success round label"
                variant="success"
                round
              />
              <AppLabel
                class="labels__item"
                text="Danger round label"
                variant="danger"
                round
              />
              <AppLabel
                class="labels__item"
                text="Warning round label"
                variant="warning"
                round
              />
              <AppLabel
                class="labels__item"
                text="Info round label"
                variant="info"
                round
              />
              <AppLabel
                class="labels__item"
                text="Light round label"
                variant="light"
                round
              />
              <AppLabel
                class="labels__item"
                text="Dark round label"
                variant="dark"
                round
              />
            </div>
          </div>
        </section>
      </section>
      <section>
        <PageLinks
          :prev="{ title: 'モーダル', to: '/works/components/modal' }"
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
  data(): Data {
    return {
      breadcrumbItems: [
        { to: '/works', text: '作品集' },
        { to: '/works/components', text: 'コンポーネント集' },
        {
          text: 'ラベル',
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

.labels {
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: -10px;
  &__item {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
