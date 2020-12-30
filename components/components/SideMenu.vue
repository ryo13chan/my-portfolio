<template>
  <aside class="side-menu">
    <p class="side-menu__title">コンポーネント集</p>
    <ul class="side-menu__list">
      <li
        v-for="menu in menuList"
        :key="menu.title"
        class="side-menu__item"
        :class="{ 'side-menu__item--active': isCurrentPage(menu.to) }"
      >
        <nuxt-link class="side-menu__link" :to="menu.to">
          {{ menu.title }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  menuList: Array<Object>
}

export default Vue.extend({
  components: {},
  data(): Data {
    return {
      menuList: [
        { title: 'ボタン', to: '/works/components/button' },
        { title: 'モーダル', to: '/works/components/modal' },
      ],
    }
  },
  methods: {
    // 現在のページか
    isCurrentPage(to: string): boolean {
      return to === this.$route.path
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.side-menu {
  width: 300px;
  padding: 20px 20px 0;
  &__title {
    font-weight: bold;
  }
  &__list {
    list-style: none;
    padding-left: 0;
  }
  &__item {
    color: $base-color;
    &--active {
      border-radius: 5px;
      background-color: lighten($base-color, 20%);
    }
  }
  &__link {
    color: $text-color;
    text-decoration: none;
    transition: color 0.5s;
    display: block;
    padding: 1rem;
    &:hover {
      color: $base-color;
    }
  }
}
</style>
