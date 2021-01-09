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

export default Vue.extend({
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary',
    },
    dismissible: {
      type: Boolean,
      required: false,
      default: false,
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
    fade: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
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

.flash-message {
  padding: 1rem;
  position: relative;
  border-radius: 0.25rem;
  &.flash-message--primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  }
  &.flash-message--secondary {
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  }
  &.flash-message--success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  &.flash-message--danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  &.flash-message--warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  &.flash-message--info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }
  &.flash-message--light {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
  }
  &.flash-message--dark {
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;
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
