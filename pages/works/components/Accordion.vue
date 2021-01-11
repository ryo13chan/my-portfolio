<template>
  <main>
    <article>
      <section class="content">
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

interface Data {
  showFlashMessage: boolean
}

export default Vue.extend({
  layout: 'components',
  data(): Data {
    return {
      showFlashMessage: true,
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
.content {
  max-width: 1230px;
  padding: 20px 15px;
  margin-right: auto;
  margin-left: auto;
  &__text {
    font-size: 1.5rem;
  }
  &__area {
    padding: 2rem;
    border: 1px solid lighten($text-color, 40%);
  }
}
.accordion {
  &__body {
    padding: 15px;
  }
}
</style>
