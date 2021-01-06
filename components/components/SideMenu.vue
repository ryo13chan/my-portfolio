<template>
  <aside class="side-menu">
    <p class="side-menu__title">
      <nuxt-link class="side-menu__link" to="/works/components">
        コンポーネント集
      </nuxt-link>
    </p>
    <ul class="side-menu__list">
      <li v-if="isDisplaySearchBox()" class="side-menu__search-box">
        <input
          v-model="searchWords"
          type="search"
          class="side-menu__search-input"
          placeholder="コンポーネント名を検索"
        />
      </li>
      <li
        v-for="menu in filteredMenuList"
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
  searchWords: string
  menuList: Array<Menu>
}
interface Menu {
  title: string
  to: string
}

export default Vue.extend({
  components: {},
  data(): Data {
    return {
      searchWords: '',
      menuList: [
        { title: 'ボタン', to: '/works/components/button' },
        { title: '見出し', to: '/works/components/heading' },
        { title: 'モーダル', to: '/works/components/modal' },
      ],
    }
  },
  computed: {
    filteredMenuList(): Array<Menu> {
      return this.menuList.filter((menu) =>
        menu.title.includes(this.searchWords)
      )
    },
  },
  methods: {
    // 検索ボックスを表示するか
    isDisplaySearchBox() {
      // コンポーネント集ページのみ表示
      return this.$route.path === '/works/components'
    },
    // 現在のページか
    isCurrentPage(to: string): boolean {
      return to === this.$route.path
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

::placeholder {
  color: lighten($color: $base-color, $amount: 20%);
}

.side-menu {
  width: 300px;
  padding: 20px 20px 0;
  &__title {
    font-weight: bold;
  }
  &__search-box {
    height: 3rem;
    margin-bottom: 20px;
  }
  &__search-input {
    height: 100%;
    width: 95%;
    padding-left: 20px;
    border-radius: 9999px;
    color: $text-color;
    border: 1px solid $base-color;
    outline: none;
    font-size: 1rem;
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
