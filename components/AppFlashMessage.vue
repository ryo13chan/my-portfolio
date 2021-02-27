<template>
  <transition :name="fade ? 'fade' : ''">
    <div v-if="localShow" class="flash-message" :class="classes">
      <slot>Primary Flash Message</slot>
      <font-awesome-icon
        v-if="dismissible"
        class="flash-message__close-flash-message"
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
  computed: {
    classes() {
      return [this.variant ? `flash-message--${this.variant}` : '']
    },
  },
  watch: {
    show(newVal: boolean) {
      this.localShow = newVal
    },
  },
  created() {
    this.localShow = this.show
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
      $flash-message-color-primary,
      $flash-message-background-color-primary,
      $flash-message-border-color-primary
    );
  }
  &.flash-message--secondary {
    @include flash-message-modifier(
      $flash-message-color-secondary,
      $flash-message-background-color-secondary,
      $flash-message-border-color-secondary
    );
  }
  &.flash-message--success {
    @include flash-message-modifier(
      $flash-message-color-success,
      $flash-message-background-color-success,
      $flash-message-border-color-success
    );
  }
  &.flash-message--danger {
    @include flash-message-modifier(
      $flash-message-color-danger,
      $flash-message-background-color-danger,
      $flash-message-border-color-danger
    );
  }
  &.flash-message--warning {
    @include flash-message-modifier(
      $flash-message-color-warning,
      $flash-message-background-color-warning,
      $flash-message-border-color-warning
    );
  }
  &.flash-message--info {
    @include flash-message-modifier(
      $flash-message-color-info,
      $flash-message-background-color-info,
      $flash-message-border-color-info
    );
  }
  &.flash-message--light {
    @include flash-message-modifier(
      $flash-message-color-light,
      $flash-message-background-color-light,
      $flash-message-border-color-light
    );
  }
  &.flash-message--dark {
    @include flash-message-modifier(
      $flash-message-color-dark,
      $flash-message-background-color-dark,
      $flash-message-border-color-dark
    );
  }

  &__close-flash-message {
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
