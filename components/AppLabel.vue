<template>
  <span class="label" :class="classes">
    {{ text }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {}

export default Vue.extend({
  props: {
    variant: {
      type: String,
      required: false,
      default: 'secondary',
    },
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: '',
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data(): Data {
    return {}
  },
  computed: {
    classes() {
      return [
        this.variant ? `label--${this.variant}` : '',
        this.size ? `label--${this.size}` : '',
        { 'label--outline': this.outline, 'label--round': this.round },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

@mixin label-outline($color) {
  color: $color;
  background-color: $color-white;
  border-color: $color;
}
@mixin label-modifier($color, $background-color, $border-color) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
  &.label--outline {
    @include label-outline($background-color);
  }
  &.label--round {
    border-radius: 10rem;
  }
}

.label {
  padding: 0.375rem 0.75rem;
  font-weight: bold;
  line-height: 1.5;
  border: 2px solid transparent;

  &--sm {
    padding: 0.2rem 0.3rem;
    font-size: 0.8rem;
  }
  &--lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }

  &.label--primary {
    @include label-modifier($color-white, $color-primary, $color-primary);
  }
  &.label--secondary {
    @include label-modifier($color-white, $color-secondary, $color-secondary);
  }
  &.label--success {
    @include label-modifier($color-white, $color-success, $color-success);
  }
  &.label--danger {
    @include label-modifier($color-white, $color-danger, $color-danger);
  }
  &.label--warning {
    @include label-modifier($color-black, $color-warning, $color-warning);
  }
  &.label--info {
    @include label-modifier($color-white, $color-info, $color-info);
  }
  &.label--light {
    @include label-modifier($color-black, $color-light, $color-light);
  }
  &.label--dark {
    @include label-modifier($color-white, $color-dark, $color-dark);
  }
}
</style>
