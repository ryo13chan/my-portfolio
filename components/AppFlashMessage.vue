<template>
  <transition :name="fade ? 'fade' : ''">
    <div
      v-if="localShow"
      class="flash-message"
      :class="[variant ? `flash-message--${variant}` : '']"
    >
      <slot>Primary Flash Message</slot>
      <font-awesome-icon
        v-if="dismissible"
        class="flash-message__close-button"
        :icon="['fas', 'times']"
        @click="clickHandler"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  localShow: boolean
}

export default Vue.extend({
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary',
    },
    // 非表示
    dismissible: {
      type: Boolean,
      required: false,
      default: false,
    },
    // 表示状態
    show: {
      type: Boolean,
      required: false,
      default: true,
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
      localShow: true,
    }
  },
  watch: {
    show(newVal: boolean) {
      this.localShow = newVal
    },
  },
  methods: {
    clickHandler(e: Event) {
      this.localShow = false
      this.$emit('click', e)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@mixin flash-message-modifier($color, $background-color, $border-color) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
}

.flash-message {
  padding: 1rem;
  position: relative;
  border-radius: 0.25rem;
  &.flash-message--primary {
    @include flash-message-modifier(
      $button-color-primary,
      $button-background-color-primary,
      $button-border-color-primary
    );
  }
  &.flash-message--secondary {
    @include flash-message-modifier(
      $button-color-secondary,
      $button-background-color-secondary,
      $button-border-color-secondary
    );
  }
  &.flash-message--success {
    @include flash-message-modifier(
      $button-color-success,
      $button-background-color-success,
      $button-border-color-success
    );
  }
  &.flash-message--danger {
    @include flash-message-modifier(
      $button-color-danger,
      $button-background-color-danger,
      $button-border-color-danger
    );
  }
  &.flash-message--warning {
    @include flash-message-modifier(
      $button-color-warning,
      $button-background-color-warning,
      $button-border-color-warning
    );
  }
  &.flash-message--info {
    @include flash-message-modifier(
      $button-color-info,
      $button-background-color-info,
      $button-border-color-info
    );
  }
  &.flash-message--light {
    @include flash-message-modifier(
      $button-color-light,
      $button-background-color-light,
      $button-border-color-light
    );
  }
  &.flash-message--dark {
    @include flash-message-modifier(
      $button-color-dark,
      $button-background-color-dark,
      $button-border-color-dark
    );
  }

  &__close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.2rem;
    :hover {
      cursor: pointer;
    }
  }
}
</style>
