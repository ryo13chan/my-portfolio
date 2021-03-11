<template>
  <main>
    <article>
      <section class="content">
        <AppBreadcrumb :items="breadcrumbItems" />
        <AppHeading class="content__title" :level="2" text="アバター" />
        <p class="content__text">アバターの一覧です。</p>
        <section>
          <AppHeading :level="3" text="基本形" />
          <div class="content__area">
            <AppAvatar variant="primary" />
            <AppAvatar variant="secondary" />
            <AppAvatar variant="success" />
            <AppAvatar variant="danger" />
            <AppAvatar variant="warning" />
            <AppAvatar variant="info" />
            <AppAvatar variant="light" />
            <AppAvatar variant="dark" />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="テキスト" />
          <div class="content__area">
            <AppAvatar text="RYO" />
            <AppAvatar>RYO<br />ryo</AppAvatar>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="大きさ" />
          <div class="content__area">
            <AppAvatar text="4rem" size="4rem" />
            <AppAvatar text="80px" size="80px" />
            <AppAvatar text="100" :size="100" />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="形" />
          <div class="content__area">
            <AppAvatar text="円" />
            <AppAvatar text="丸角" round />
            <AppAvatar text="四角" square />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="画像" />
          <div class="content__area">
            <AppAvatar :src="avatarSrc" />
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="ボタン形式" />
          <div class="content__area">
            <AppAvatar
              text="押"
              button
              @click="showFlashMessage = !showFlashMessage"
            />
            <AppFlashMessage
              class="flash-message"
              :show="showFlashMessage"
              variant="primary"
              >ボタン押下で非表示</AppFlashMessage
            >
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="リンク形式" />
          <div class="content__area">
            <AppAvatar link to="/works" text="作品集" />
            <AppAvatar link to="/" :src="avatarSrc" />
            <AppAvatar
              link
              href="https://www.google.co.jp/"
              target="_blank"
              text="Google"
              variant="primary"
            />
          </div>
        </section>
      </section>
      <section>
        <PageLinks
          :prev="{ title: 'アコーディオン', to: '/works/components/accordion' }"
          :next="{
            title: 'カード',
            to: '/works/components/card',
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
  avatarSrc: String
  showFlashMessage: Boolean
}

export default Vue.extend({
  layout: 'components',
  data(): Data {
    return {
      breadcrumbItems: [
        { to: '/works', text: '作品集' },
        { to: '/works/components', text: 'コンポーネント集' },
        {
          text: 'アバター',
        },
      ],
      avatarSrc: require('~/assets/images/icon.jpg'),
      showFlashMessage: false,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
@import '~/assets/scss/components/content.scss';

.content__area {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > .avatar:not(:last-child) {
    margin-right: 10px;
  }

  .flash-message {
    width: 100%;
  }
}
</style>
