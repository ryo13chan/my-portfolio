<template>
  <main>
    <article>
      <section class="content">
        <div class="welcome">
          <div class="welcome__body">
            <AppHeading
              class="welcome__title"
              :level="1"
              :text="`Welcome to Ryo's Portfolio!`"
            />
            <p class="welcome__text">
              はじめまして。<br />
              Webエンジニアの<span class="welcome__text--emphasis">Ryo</span
              >と申します。<br />
              当サイトはWebエンジニアとしてのポートフォリオです。<br />
              是非ご覧ください！<br />
            </p>
          </div>
          <div class="welcome__image">
            <figure class="avatar">
              <img class="avatar__image" :src="avatarUrl" alt="アバター" />
            </figure>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      avatarUrl: require('~/assets/images/icon.jpg'),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
.content {
  max-width: 1230px;
  padding: 60px 15px;
  margin-right: auto;
  margin-left: auto;
}
.welcome {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__body {
    flex: 1;
  }
  &__title {
    letter-spacing: 0.1rem;
  }
  &__text {
    line-height: 2;
    letter-spacing: 0.1rem;
    &--emphasis {
      color: $base-color;
      font-size: 1.2rem;
    }
  }
  &__image {
    flex: 1;
    text-align: center;
  }
}
.avatar {
  &__image {
    border-radius: 50%;
    height: 300px;
    width: 300px;
  }
}
</style>
