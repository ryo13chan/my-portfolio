<template>
  <div v-if="prev || next" class="page-links">
    <div class="page-links__item page-links__item--prev">
      <nuxt-link
        v-if="prev"
        class="page-links__link page-links__link--prev"
        :to="prev.to"
      >
        <font-awesome-icon
          class="page-links__icon"
          :icon="['fas', 'arrow-left']"
        />
        <span class="page-links__title">{{ prev.title }}</span>
      </nuxt-link>
    </div>
    <div class="page-links__item page-links__item--next">
      <nuxt-link
        v-if="next"
        class="page-links__link page-links__link--next"
        :to="next.to"
      >
        <span class="page-links__title">{{ next.title }}</span>
        <font-awesome-icon
          class="page-links__icon"
          :icon="['fas', 'arrow-right']"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface link {
  title: string
  to: string
}

export default Vue.extend({
  props: {
    // 前のページ
    prev: {
      type: Object as PropType<link>,
      required: false,
    },
    // 次のページ
    next: {
      type: Object as PropType<link>,
      required: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.page-links {
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  color: $base-color;
  &__link {
    color: $base-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
