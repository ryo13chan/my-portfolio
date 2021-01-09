<template>
  <main>
    <article>
      <section class="content">
        <AppHeading
          class="content__title"
          :level="2"
          :text="'フラッシュメッセージ'"
        />
        <p class="content__text">フラッシュメッセージの一覧です。</p>
        <section>
          <AppHeading :level="3" text="基本形" />
          <div class="content__area">
            <AppFlashMessage variant="primary"
              >Primary Flash Message</AppFlashMessage
            >
            <AppFlashMessage variant="secondary"
              >Secondary Flash Message</AppFlashMessage
            >
            <AppFlashMessage variant="success"
              >Sucess Flash Message</AppFlashMessage
            >
            <AppFlashMessage variant="danger"
              >Danger Flash Message</AppFlashMessage
            >
            <AppFlashMessage variant="warning"
              >Warning Flash Message</AppFlashMessage
            >
            <AppFlashMessage variant="info">Info Flash Message</AppFlashMessage>
            <AppFlashMessage variant="light"
              >Light Flash Message</AppFlashMessage
            >
            <AppFlashMessage variant="dark">Dark Flash Message</AppFlashMessage>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="表示内容のカスタマイズ" />
          <div class="content__area">
            <AppFlashMessage variant="primary">
              <nuxt-link to="/">ホームへのリンク </nuxt-link>
            </AppFlashMessage>
            <AppFlashMessage variant="secondary">
              <AppHeading :level="4" text="見出し" />
              <AppHeading :level="5" text="見出し" />
              <hr />
              <AppHeading :level="6" text="見出し" />
            </AppFlashMessage>
          </div>
        </section>
        <section>
          <AppHeading :level="3" text="表示切り替え" />
          <div class="content__area">
            <AppFlashMessage dismissible variant="primary"
              >×ボタン押下で非表示</AppFlashMessage
            >
            <AppFlashMessage
              dismissible
              variant="secondary"
              @click="alert('非表示にする')"
              >非表示時にアラートを表示</AppFlashMessage
            >
            <AppFlashMessage :show="showFlashMessage" variant="success"
              >ボタンで表示・非表示を切り替え</AppFlashMessage
            >
            <button @click="showFlashMessage = !showFlashMessage">
              表示切り替え
            </button>
            <AppFlashMessage dismissible fade variant="danger"
              >ふわっと非表示</AppFlashMessage
            >
          </div>
        </section>
      </section>
      <section>
        <PageLinks
          :prev="{ title: 'コンポーネント集', to: '/works/components' }"
          :next="{ title: 'ボタン', to: '/works/components/button' }"
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
</style>
