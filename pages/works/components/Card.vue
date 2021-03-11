<template>
  <main>
    <article>
      <section class="content">
        <AppBreadcrumb :items="breadcrumbItems" />
        <AppHeading class="content__title" :level="2" text="カード" />
        <p class="content__text">カードの一覧です。</p>
        <section>
          <AppHeading :level="3" text="基本形" />
          <div class="content__area">
            <AppCard
              class="card"
              header="ヘッダー"
              footer="フッター"
              title="タイトル"
              sub-title="サブタイトル"
            >
              <div>内容</div>
            </AppCard>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="色" />
          <div class="content__area">
            <div class="card__row">
              <AppCard
                class="card"
                header="Primary"
                header-align="center"
                body-align="center"
                variant="primary"
              >
                <div>Primary</div>
              </AppCard>
              <AppCard
                class="card"
                header="Secondary"
                header-align="center"
                body-align="center"
                variant="secondary"
              >
                <div>Secondary</div>
              </AppCard>
              <AppCard
                class="card"
                header="Success"
                header-align="center"
                body-align="center"
                variant="success"
              >
                <div>Success</div>
              </AppCard>
            </div>
            <div class="card__row">
              <AppCard
                class="card"
                header="Danger"
                header-align="center"
                body-align="center"
                variant="danger"
              >
                <div>Danger</div>
              </AppCard>
              <AppCard
                class="card"
                header="Warning"
                header-align="center"
                body-align="center"
                variant="warning"
              >
                <div>Warning</div>
              </AppCard>
              <AppCard
                class="card"
                header="Info"
                header-align="center"
                body-align="center"
                variant="info"
              >
                <div>Info</div>
              </AppCard>
            </div>
            <div class="card__row">
              <AppCard
                class="card"
                header="Light"
                header-align="center"
                body-align="center"
                variant="light"
              >
                <div>Light</div>
              </AppCard>
              <AppCard
                class="card"
                header="Dark"
                header-align="center"
                body-align="center"
                variant="dark"
              >
                <div>Dark</div>
              </AppCard>
            </div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="表示位置" />
          <div class="content__area">
            <div class="card__row">
              <AppCard
                class="card"
                header="左寄せ"
                header-align="left"
                footer="右寄せ"
                footer-align="right"
                body-align="center"
              >
                <div>中央寄せ</div>
              </AppCard>
              <AppCard
                class="card"
                header="中央寄せ"
                header-align="center"
                footer="左寄せ"
                footer-align="left"
                body-align="right"
              >
                <div>右寄せ</div>
              </AppCard>
              <AppCard
                class="card"
                header="右寄せ"
                header-align="right"
                footer="中央寄せ"
                footer-align="center"
                body-align="left"
              >
                <div>左寄せ</div>
              </AppCard>
            </div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="表示内容のカスタマイズ" />
          <div class="content__area">
            <AppCard class="card" title="Ryoについて">
              <template v-slot:header>
                <div class="card-customize__header">
                  <AppAvatar class="avatar" link to="/" :src="avatarUrl" />
                  <AppLabel
                    class="customize__label"
                    text="#card"
                    variant="secondary"
                    round
                  />
                  <AppLabel
                    class="customize__label"
                    text="#カード"
                    variant="secondary"
                    round
                  />
                  <AppLabel
                    class="customize__label"
                    text="#ryo"
                    variant="secondary"
                    round
                  />
                  <AppLabel
                    class="customize__label"
                    text="#カスタマイズ"
                    variant="secondary"
                    round
                  />
                </div>
              </template>
              <AppAccordion title="好きなもの">
                <template v-slot:body>
                  <ul>
                    <li>お笑い</li>
                    <li>温泉</li>
                    <li>チーズ</li>
                  </ul>
                </template>
              </AppAccordion>
              <template v-slot:footer>
                <AppFlashMessage variant="secondary">
                  © 2021 Ryo
                </AppFlashMessage>
              </template>
            </AppCard>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="画像" />
          <div class="content__area">
            <div class="card__row">
              <AppCard
                class="card"
                title="画像"
                body-align="center"
                :img-src="hakuchoUrl"
              />
              <AppCard
                class="card"
                title="画像クリックイベント"
                body-align="center"
                img-click
                :img-src="hakuchoUrl"
                @click-img="alert('画像クリック')"
              />
            </div>
            <div class="card__row">
              <AppCard
                class="card"
                title="画像クリックでTOP遷移"
                body-align="center"
                img-to="/"
                :img-src="hakuchoUrl"
              />
              <AppCard
                class="card"
                title="画像クリックで外部リンク"
                body-align="center"
                img-href="http://muro-kanko.com/see/hakuchouoohashi.html"
                img-target="_blank"
                :img-src="hakuchoUrl"
              />
            </div>
            <div class="card__row">
              <AppCard
                class="card"
                header="ヘッダー"
                title="ヘッダー上部に画像"
                body-align="center"
                footer="フッター"
                :img-src="hakuchoUrl"
              />
              <AppCard
                class="card"
                header="ヘッダー"
                title="フッター下部に画像"
                body-align="center"
                footer="フッター"
                :img-src="hakuchoUrl"
                img-align="bottom"
              />
            </div>
          </div>
        </section>
      </section>
      <section>
        <PageLinks
          :prev="{ title: 'アバター', to: '/works/components/avatar' }"
          :next="{
            title: 'パンくずリスト',
            to: '/works/components/breadcrumb',
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
  avatarUrl: String
  hakuchoUrl: String
}

export default Vue.extend({
  layout: 'components',
  data(): Data {
    return {
      breadcrumbItems: [
        { to: '/works', text: '作品集' },
        { to: '/works/components', text: 'コンポーネント集' },
        {
          text: 'カード',
        },
      ],
      avatarUrl: require('~/assets/images/icon.jpg'),
      hakuchoUrl: require('~/assets/images/hakucho.jpg'),
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

.card__row {
  display: flex;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
.card {
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;

  .card-customize__header {
    display: flex;
    align-items: center;
    & > .customize__label {
      margin-left: 10px;
    }
  }
}
</style>
