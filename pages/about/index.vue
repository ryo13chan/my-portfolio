<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" :text="'About'" />
        <section>
          <AppHeading :level="3" text="当サイトについて" />
          <div class="content__about-this-site">
            <div>ポートフォリオ</div>
            <div>作成目的</div>
            <div>使用技術</div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="自己紹介" />
          <div class="content__self-introduction">
            json
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="経歴" />
          <div class="content__work-history">
            2019/05 - 2020/01
            <AppAccordion title="あああああシステム開発">
              <template v-slot:body>
                <div>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                </div>
              </template>
            </AppAccordion>
            2019/05 - 2020/01
            <AppAccordion title="あああああシステム開発">
              <template v-slot:body>
                <div>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                  <p>アコーディオン中身</p>
                </div>
              </template>
            </AppAccordion>
          </div>
        </section>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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

  &__about-this-site {
    display: flex;
    justify-content: space-between;
  }
}
</style>
