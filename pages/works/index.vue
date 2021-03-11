<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" :text="'Works'" />
        <div class="works">
          <div class="works__row">
            <AppCard
              class="works__item"
              title="ポートフォリオ"
              body-align="center"
              img-click
              :img-src="homeImgSrc"
            />
            <AppCard
              class="works__item"
              title="更新履歴お知らせ"
              body-align="center"
              img-click
              :img-src="gitCommitImgSrc"
            />
          </div>
          <div class="works__row">
            <AppCard
              class="works__item"
              title="コンポーネント集"
              body-align="center"
              img-click
              :img-src="componentsImgSrc"
            />
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  homeImgSrc: String
  gitCommitImgSrc: String
  componentsImgSrc: String
}

export default Vue.extend({
  data(): Data {
    return {
      homeImgSrc: require('~/assets/images/works/portfolio.png'),
      gitCommitImgSrc: require('~/assets/images/works/gitCommit.png'),
      componentsImgSrc: require('~/assets/images/works/components.png'),
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
}
.works {
  &__row {
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
    & > .works__item {
      width: 49%;
    }
  }
}
</style>
