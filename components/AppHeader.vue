<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__left">
        <h1 class="lavel1-heading">
          <span class="level1-heading__inner">Ryo's Portfolio</span>
        </h1>
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

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ddd;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__left {
    padding: 5px;
    width: 30%;
  }
  &__right {
    padding: 5px;
    width: 50%;
  }
}
.lavel1-heading {
  color: rgb(109, 110, 112);
  &__inner {
    margin-left: 10px;
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
    color: rgb(109, 110, 112);
    text-decoration: none;
    &--active {
      color: #7cc7e8;
      border-bottom: 1px solid #7cc7e8;
      padding-bottom: 5px;
    }
  }
}
</style>
