<template>
  <div class="accordion">
    <div class="accordion__title">
      <button
        type="button"
        class="accordion__button"
        :style="{ 'text-align': titleAlign }"
        @click="toggleAccordion"
      >
        {{ title }}
        <font-awesome-icon
          class="accordion__icon"
          :icon="isOpen ? ['fas', 'caret-up'] : ['fas', 'caret-down']"
        />
      </button>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        v-if="isOpen"
        class="accordion__body"
        :class="{ 'accordion__body--transition': fade }"
      >
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  isOpen: boolean
}

export default Vue.extend({
  props: {
    // タイトル
    title: {
      type: String,
      required: true,
    },
    // タイトル位置
    titleAlign: {
      type: String,
      required: false,
      default: 'left',
    },
    // 非表示時のfadeアニメーション
    fade: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data(): Data {
    return {
      isOpen: false,
    }
  },
  methods: {
    // アコーディオン切り替え
    toggleAccordion() {
      this.isOpen = !this.isOpen
    },
    beforeEnter(el: HTMLElement) {
      if (!this.fade) {
        return
      }
      el.style.height = '0'
    },
    enter(el: HTMLElement) {
      if (!this.fade) {
        return
      }
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el: HTMLElement) {
      if (!this.fade) {
        return
      }
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el: HTMLElement) {
      if (!this.fade) {
        return
      }
      el.style.height = '0'
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.accordion {
  &__button {
    display: block;
    position: relative;
    width: 100%;
    padding: 10px 40px 10px 15px;
    text-align: left;
    font-size: 1rem;
    cursor: pointer;
  }
  &__icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
  }
  &__body {
    border: 1px solid lighten($text-color, 40%);
    &--transition {
      transition: height 0.4s ease-in-out;
      overflow: hidden;
    }
  }
}
</style>
