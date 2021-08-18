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
                <div>Webエンジニアとしてのポートフォリオになります。</div>
                <div>
                  これまでの経歴、スキル、作品集などを随時更新しています。
                </div>
                <div>
                  もし仕事をご一緒する機会があれば、是非を目を通してください！
                </div>
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
                <div>
                  これまでどんな経験をしてきたのかを説明する、どんな技術が使用できるか・興味があるかを伝えるために作成しました。
                </div>
                <div>その他、Webアプリ作成や技術の学習に役立っています。</div>
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
                <div>
                  フレームワークは<span class="font-weight-bold">
                    Nuxt.js(Vue2)</span
                  >、altJSに<span class="font-weight-bold">TypeScript</span>、
                  デザインに<span class="font-weight-bold">SCSS・BEM</span>、
                  API通信には<span class="font-weight-bold">Axios</span>
                  を使用しています。
                </div>
                <div>
                  ホスティングは<span class="font-weight-bold">
                    GitHub Pages</span
                  >
                  を使用しています。
                </div>
                <div>
                  デプロイは<span class="font-weight-bold">GitHub Actions</span>
                  で自動化しています。
                </div>
                <div>
                  今後<span class="font-weight-bold">ユニットテスト</span>、
                  <span class="font-weight-bold">テスト自動化</span>、<span
                    class="font-weight-bold"
                  >
                    レスポンシブ対応</span
                  >、<span class="font-weight-bold">Vue3対応</span
                  >などを予定しています。
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="自己紹介" />
          <div class="content__self-introduction">
            <highlightjs language="javascript" :code="introductionCode" />
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

interface Data {
  avatarUrl: {
    portfolio: string
    purpose: string
    tech: string
  }
  avatarSize: string
  introductionCode: string
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
      introductionCode: `const 作者 = {
  名前: 'Ryo',
  性別: '男',
  生年月日: '1992-10-20',
  出身地: '北海道',
  居住地: '北海道',
  好きなもの: [
    'お笑い', '漫画', 'ゲーム', 'ラジオ', 'サッカー', 'YouTube', '散歩'
  ],
  仕事: {
    職業: 'Webエンジニア',
    業務形態： [
      'フリーランス', 'リモートワーク ', '週5日'
    ],
  }
}`,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

/deep/ .hljs {
  background: #282c34;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  line-height: 1.5rem;
  padding: 1.5rem;
}
.content {
  max-width: 1230px;
  padding: 20px 15px;
  margin-right: auto;
  margin-left: auto;

  &__about-this-site {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
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

  &__self-introduction {
    font-size: 0.85rem;
  }
}
.avatar {
  &__title {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  &__description {
    line-height: 2;
    & .font-weight-bold {
      font-weight: bold;
    }
  }
}
</style>
