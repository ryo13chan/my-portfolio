<template>
  <main>
    <article>
      <section class="content">
        <AppHeading class="content__title" :level="2" :text="'見出し'" />
        <p class="content__text">見出しの一覧です。</p>
        <AppHeading
          class="content__title"
          :level="3"
          :text="'見出し（h1〜h6）'"
        />
        <div class="content__area">
          <AppHeading class="content__title" :level="1" :text="'見出し1'" />
          <AppHeading class="content__title" :level="2" :text="'見出し2'" />
          <AppHeading class="content__title" :level="3" :text="'見出し3'" />
          <AppHeading class="content__title" :level="4" :text="'見出し4'" />
          <AppHeading class="content__title" :level="5" :text="'見出し5'" />
          <AppHeading class="content__title" :level="6" :text="'見出し6'" />
        </div>
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeading from '~/components/AppHeading.vue'

export default Vue.extend({
  layout: 'components',
  components: {
    AppHeading,
  },
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
  &__text {
    font-size: 1.5rem;
  }
  &__area {
    padding: 2rem;
    border: 1px solid lighten($text-color, 40%);
  }
}
</style>
