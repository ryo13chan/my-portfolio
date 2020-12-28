<template>
  <component
    :is="headingTag(level)"
    class="heading"
    :class="`heading_level${level}`"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    level: {
      type: Number,
      required: false,
      default: 1,
    },
    text: {
      type: String,
      required: false,
      default: 'heading',
    },
  },
  methods: {
    headingTag(level: Number) {
      return `h${level}`
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

@mixin heading($size: 1rem, $weight: bold) {
  font-size: $size;
  font-weight: $weight;
}
@mixin border-bottom($size: 4px) {
  border-bottom: $size solid $base-color;
  padding-bottom: 10px;
}
@mixin border-left($size: 2px) {
  border-left: $size solid $base-color;
  padding-left: 6px;
}

.heading {
  color: $text-color;
}
.heading_level {
  &1 {
    @include heading(2.5rem);
  }
  &2 {
    @include heading(2rem);
    @include border-bottom(4px);
    text-align: center;
  }
  &3 {
    @include heading(1.75rem);
    @include border-bottom(1.5px);
    text-align: center;
  }
  &4 {
    @include heading(1.5rem);
    @include border-left(2px);
  }
  &5 {
    @include heading(1.25rem);
  }
  &6 {
    @include heading(1rem, normal);
  }
}
</style>
