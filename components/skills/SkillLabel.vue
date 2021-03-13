<template>
  <AppLabel :text="label" outline size="lg">
    <template v-slot:left>
      <font-awesome-icon :icon="icon" size="lg" />
    </template>
  </AppLabel>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: Array as PropType<String[]>,
      required: true,
    },
  },
  computed: {},
  methods: {},
})
</script>

<style lang="scss" scoped></style>
