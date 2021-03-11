<template>
  <div class="app-card">
    <img
      v-if="imgSrc && imgAlign === 'top'"
      :src="imgSrc"
      :alt="imgAlt"
      class="app-card__img"
      :class="imgClasses"
      @click="onClickImg"
    />
    <div
      v-if="header || this.$slots.header"
      class="app-card__header"
      :class="headerClasses"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="app-card__body" :class="bodyClasses">
      <AppHeading
        v-if="title"
        class="app-card__title"
        :level="5"
        :text="title"
      />
      <AppHeading
        v-if="title"
        class="app-card__sub-title"
        :level="6"
        :text="subTitle"
      />
      <slot></slot>
    </div>
    <div
      v-if="footer || this.$slots.footer"
      class="app-card__footer"
      :class="footerClasses"
    >
      <slot name="footer">
        {{ footer }}
      </slot>
    </div>
    <img
      v-if="imgSrc && imgAlign === 'bottom'"
      :src="imgSrc"
      :alt="imgAlt"
      class="app-card__img"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    bodyAlign: {
      type: String,
      required: false,
      default: 'left',
    },
    footer: {
      type: String,
      required: false,
      default: '',
    },
    footerAlign: {
      type: String,
      required: false,
      default: 'left',
    },
    header: {
      type: String,
      required: false,
      default: '',
    },
    headerAlign: {
      type: String,
      required: false,
      default: 'left',
    },
    imgAlign: {
      type: String,
      required: false,
      default: 'top',
    },
    imgAlt: {
      type: String,
      required: false,
      default: 'Image',
    },
    imgClick: {
      type: Boolean,
      required: false,
      default: false,
    },
    imgHref: {
      type: String,
      required: false,
      default: '',
    },
    imgSrc: {
      type: String,
      required: false,
      default: '',
    },
    imgTarget: {
      type: String,
      required: false,
      default: '_self',
    },
    imgTo: {
      type: String,
      required: false,
      default: '',
    },
    subTitle: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    variant: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    imgClasses() {
      return [
        this.imgClick || this.imgTo || this.imgHref
          ? `app-card__img--clickable`
          : '',
      ]
    },
    headerClasses() {
      return [
        this.variant ? `app-card__header--${this.variant}` : '',
        `text-${this.headerAlign}`,
      ]
    },
    bodyClasses() {
      return [
        this.variant ? `app-card__body--${this.variant}` : '',
        `text-${this.bodyAlign}`,
      ]
    },
    footerClasses() {
      return [
        this.variant ? `app-card__footer--${this.variant}` : '',
        `text-${this.footerAlign}`,
      ]
    },
  },
  methods: {
    onClickImg(event: Event) {
      if (this.imgClick) {
        this.$emit('click-img', event)
      }
      if (this.imgTo) {
        this.$router.push(this.imgTo)
      }
      if (this.imgHref) {
        window.open(this.imgHref, this.imgTarget)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_common.scss';
@import '~/assets/scss/_variable.scss';

@mixin card-header-modifier(
  $color,
  $background-color,
  $border-color: lighten($text-color, 40%)
) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
}
@mixin card-body-modifier(
  $color,
  $background-color,
  $border-color: lighten($text-color, 40%)
) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
}
@mixin card-footer-modifier(
  $color,
  $background-color,
  $border-color: lighten($text-color, 40%)
) {
  color: $color;
  background-color: $background-color;
  border-color: $border-color;
}

.app-card {
  &__img {
    width: calc(100% - 2px);
    height: auto;
    vertical-align: top;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-color: lighten($text-color, 40%);

    &--clickable {
      &:hover {
        cursor: pointer;
      }
    }
  }
  &__header {
    padding: 1rem;
    background-color: $color-light;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    border-color: lighten($text-color, 40%);

    &.app-card__header--primary {
      @include card-header-modifier($color-white, $color-primary);
    }
    &.app-card__header--secondary {
      @include card-header-modifier($color-white, $color-secondary);
    }
    &.app-card__header--success {
      @include card-header-modifier($color-white, $color-success);
    }
    &.app-card__header--danger {
      @include card-header-modifier($color-white, $color-danger);
    }
    &.app-card__header--warning {
      @include card-header-modifier($color-black, $color-warning);
    }
    &.app-card__header--info {
      @include card-header-modifier($color-white, $color-info);
    }
    &.app-card__header--light {
      @include card-header-modifier($color-black, $color-light);
    }
    &.app-card__header--dark {
      @include card-header-modifier($color-white, $color-dark);
    }
  }
  &__title {
    margin: 0 0 1rem;
  }
  &__sub-title {
    margin: 0 0 1.5rem;
  }
  &__body {
    padding: 1rem;
    border: 1px solid lighten($text-color, 40%);

    &.app-card__body--primary {
      @include card-body-modifier($color-white, lighten($color-primary, 10%));
    }
    &.app-card__body--secondary {
      @include card-body-modifier($color-white, lighten($color-secondary, 10%));
    }
    &.app-card__body--success {
      @include card-body-modifier($color-white, lighten($color-success, 10%));
    }
    &.app-card__body--danger {
      @include card-body-modifier($color-white, lighten($color-danger, 10%));
    }
    &.app-card__body--warning {
      @include card-body-modifier($color-black, lighten($color-warning, 10%));
    }
    &.app-card__body--info {
      @include card-body-modifier($color-white, lighten($color-info, 10%));
    }
    &.app-card__body--light {
      @include card-body-modifier($color-black, lighten($color-light, 10%));
    }
    &.app-card__body--dark {
      @include card-body-modifier($color-white, lighten($color-dark, 10%));
    }
  }
  &__footer {
    padding: 1rem;
    background-color: $color-light;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: lighten($text-color, 40%);

    &.app-card__footer--primary {
      @include card-footer-modifier($color-white, $color-primary);
    }
    &.app-card__footer--secondary {
      @include card-footer-modifier($color-white, $color-secondary);
    }
    &.app-card__footer--success {
      @include card-footer-modifier($color-white, $color-success);
    }
    &.app-card__footer--danger {
      @include card-footer-modifier($color-white, $color-danger);
    }
    &.app-card__footer--warning {
      @include card-footer-modifier($color-black, $color-warning);
    }
    &.app-card__footer--info {
      @include card-footer-modifier($color-white, $color-info);
    }
    &.app-card__footer--light {
      @include card-footer-modifier($color-black, $color-light);
    }
    &.app-card__footer--dark {
      @include card-footer-modifier($color-white, $color-dark);
    }
  }
}
</style>
