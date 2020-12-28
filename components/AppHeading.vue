<template>
  <component class="heading" :class="`heading_level${level}`" :is="headingTag(level)">
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
     default: 'heading'
   }
 },
  methods: {
    headingTag(level: Number) {
      return `h${level}`;
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variable.scss";

.heading {
  color: $text-color;
  &__inner {
    margin-left: 10px;
  }
}
.heading_level {
  &1{
    font-size: 2.5rem;
  }
  &2{
    font-size: 2rem;
  }
  &3{
    font-size: 1.75rem;
  }
  &4{
    font-size: 1.5rem;
  }
  &5{
    font-size: 1.25rem;
  }
  &6{
    font-size: 1rem;
  }
}
</style>
