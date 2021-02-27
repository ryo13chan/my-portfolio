<template>
  <div class="avatar" :class="classes" :style="styles" @click="onClick">
    <slot>
      <figure v-if="src" class="avatar__figure">
        <img class="avatar__image" :src="src" alt="アバター" />
      </figure>
      <span v-else-if="text" class="avatar__text">{{ text }}</span>
      <font-awesome-icon v-else class="avatar__icon" :icon="['fa', 'user']" />
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {}

export default Vue.extend({
  props: {
    button: {
      type: Boolean,
      required: false,
      default: false,
    },
    href: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: [String, Number],
      required: false,
      default: '4rem',
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
    src: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    to: {
      type: String,
      required: false,
      default: '',
    },
    target: {
      type: String,
      required: false,
      default: '_self',
    },
    variant: {
      type: String,
      required: false,
      default: 'secondary',
    },
  },
  data(): Data {
    return {}
  },
  computed: {
    classes() {
      return [
        this.variant ? `avatar--${this.variant}` : '',
        {
          'avatar--button': this.button,
          'avatar--link': this.link,
          'avatar--round': this.round,
          'avatar--square': this.square,
        },
      ]
    },
    styles() {
      const height =
        typeof this.size === 'number' ? `${this.size}px` : this.size
      const width = typeof this.size === 'number' ? `${this.size}px` : this.size
      return {
        '--height': height,
        '--width': width,
      }
    },
  },
  methods: {
    onClick(e: Event) {
      if (this.button) {
        this.$emit('click', e)
      }
      if (this.link) {
        this.onLink()
      }
    },
    onLink() {
      if (this.to) {
        this.$router.push(this.to)
      }
      if (this.href) {
        window.open(this.href, this.target)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

@mixin avatar-modifier($color, $background-color, $border-color) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
  &.avatar--button,
  &.avatar--link {
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  &.avatar--round {
    border-radius: 0.3rem;
  }
  &.avatar--square {
    border-radius: 0;
  }
}

.avatar {
  display: inline-flex;
  width: var(--width);
  height: var(--height);
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &.avatar--primary {
    @include avatar-modifier($color-white, $color-primary, $color-primary);
  }
  &.avatar--secondary {
    @include avatar-modifier($color-white, $color-secondary, $color-secondary);
  }
  &.avatar--success {
    @include avatar-modifier($color-white, $color-success, $color-success);
  }
  &.avatar--danger {
    @include avatar-modifier($color-white, $color-danger, $color-danger);
  }
  &.avatar--warning {
    @include avatar-modifier($color-black, $color-warning, $color-warning);
  }
  &.avatar--info {
    @include avatar-modifier($color-white, $color-info, $color-info);
  }
  &.avatar--light {
    @include avatar-modifier($color-black, $color-light, $color-light);
  }
  &.avatar--dark {
    @include avatar-modifier($color-white, $color-dark, $color-dark);
  }

  &__figure {
    height: 100%;
    width: auto;
  }

  &__image {
    border-radius: 50%;
    width: var(--width);
    height: var(--height);
  }

  &__text {
    font-size: 1rem;
  }

  &__icon {
    height: auto;
    width: 40%;
    max-width: 100%;
  }
}
</style>
