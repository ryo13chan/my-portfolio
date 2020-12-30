<template>
  <main>
    <article>
      <section class="content">
        <AppHeading :level="2" :text="'モーダル'" />
      </section>
    </article>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeading from '~/components/AppHeading.vue'

export default Vue.extend({
  layout: 'components',
  components: {
    AppHeading,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';
.content {
  max-width: 1230px;
  padding: 20px 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
