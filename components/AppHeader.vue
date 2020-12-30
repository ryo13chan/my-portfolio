<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__left">
        <figure class="avatar">
          <img class="avatar__image" :src="avatarUrl" alt="アバター" />
        </figure>
        <GitLastCommit />
      </div>
      <div class="header__right">
        <nav class="navigation">
          <ul class="navigation__inner">
            <li class="navigation__item">
              <nuxt-link
                class="navigation__link"
                active-class="navigation__link--active"
                to="/"
                exact
              >
                Home
              </nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link
                class="navigation__link"
                active-class="navigation__link--active"
                to="/about"
              >
                About
              </nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link
                class="navigation__link"
                active-class="navigation__link--active"
                to="/skills"
              >
                Skills
              </nuxt-link>
            </li>
            <li class="navigation__item">
              <nuxt-link
                class="navigation__link"
                active-class="navigation__link--active"
                to="/works"
              >
                Works
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import GitLastCommit from '~/components/GitLastCommit.vue'

export default Vue.extend({
  components: {
    GitLastCommit,
  },
  data() {
    return {
      avatarUrl: require('~/assets/images/icon.jpg'),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.header {
  border-bottom: 1px solid #ddd;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__left {
    display: flex;
    align-items: center;
    padding: 5px;
    width: 50%;
  }
  &__right {
    padding: 5px;
    width: 50%;
  }
}
.avatar {
  &__image {
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
}
.navigation {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
  }
  &__link {
    color: $text-color;
    text-decoration: none;
    transition: color 0.5s;
    &--active {
      color: $base-color;
      border-bottom: 1px solid $base-color;
      padding-bottom: 5px;
    }
    &:hover {
      color: $base-color;
    }
  }
}
</style>
