<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__items">
      <li
        v-for="(item, index) in items"
        :key="item.text"
        class="breadcrumb__item"
      >
        <nuxt-link v-if="item.to" class="breadcrumb__link" :to="item.to">
          <span class="breadcrumb__text">{{ item.text }}</span>
        </nuxt-link>
        <a
          v-else-if="item.href"
          :href="item.href"
          :target="item.target"
          class="breadcrumb__link"
        >
          <span class="breadcrumb__text">{{ item.text }}</span>
        </a>
        <span v-else class="breadcrumb__text">{{ item.text }}</span>
        <span v-if="showDelimiter(index)" class="breadcrumb__delimiter">{{
          delimiter
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Data {}

export interface breadcrumbItem {
  href?: string
  target?: string
  text: string
  to?: string
}

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<breadcrumbItem[]>,
      required: true,
    },
    delimiter: {
      type: String,
      default: '>',
    },
  },
  data(): Data {
    return {}
  },
  methods: {
    // 区切り文字を表示するか
    showDelimiter(index: number) {
      // 最後以外で表示
      return index !== this.items.length - 1
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.breadcrumb {
  &__items {
    display: flex;
    list-style: none;
    padding: 0;
  }
  &__link {
    color: $base-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &__delimiter {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
}
</style>
