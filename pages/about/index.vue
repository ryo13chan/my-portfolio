<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" :text="'About'" />
        <section>
          <AppHeading :level="3" text="当サイトについて" />
          <div class="content__about-this-site">
            <div class="content__portfolio">
              <AppAvatar
                class="avatar__portfolio"
                :src="avatarUrl.portfolio"
                :size="avatarSize"
              />
              <div class="avatar__title">ポートフォリオ</div>
              <div class="avatar__description">
                ポートフォリオポートフォリオポートフォリオポートフォリオポートフォリオポートフォリオ
              </div>
            </div>
            <div class="content__purpose">
              <AppAvatar
                class="avatar__purpose"
                :src="avatarUrl.purpose"
                :size="avatarSize"
              />
              <div class="avatar__title">作成目的</div>
              <div class="avatar__description">
                作成目的作成目的作成目的作成目的作成目的作成目的
              </div>
            </div>
            <div class="content__tech">
              <AppAvatar
                class="avatar__tech"
                :src="avatarUrl.tech"
                :size="avatarSize"
              />
              <div class="avatar__title">使用技術</div>
              <div class="avatar__description">
                使用技術使用技術使用技術使用技術使用技術使用技術
              </div>
            </div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="自己紹介" />
          <div class="content__self-introduction">json</div>
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

interface Data {
  avatarUrl: {
    portfolio: string
    purpose: string
    tech: string
  }
  avatarSize: string
}

export default Vue.extend({
  data(): Data {
    return {
      avatarUrl: {
        portfolio: require('~/assets/images/about/portfolio.png'),
        purpose: require('~/assets/images/about/purpose.png'),
        tech: require('~/assets/images/about/tech.png'),
      },
      avatarSize: '200px',
    }
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

  &__portfolio,
  &__purpose,
  &__tech {
    width: 32%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.avatar {
  &__title {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
}
</style>
