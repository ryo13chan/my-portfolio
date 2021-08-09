<template>
  <div v-if="isDisplayCommit()" class="commit">
    <div class="commit__header">
      <span class="commit__date">
        {{ displayCommitDate() }}
      </span>
      <AppLabel
        v-if="isDisplayNewLabel()"
        text="New"
        size="sm"
        variant="warning"
      />
    </div>
    <div class="commit__comment">
      <a class="commit__link" :href="commitUrl" target="_blank">
        {{ commitMessage }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Getters, State } from '~/assets/@types/store/git'

export default Vue.extend({
  computed: {
    commit(): Getters['commit'] {
      return this.$store.getters['git/commit']
    },
    commitMessage(): State['commit']['message'] {
      return this.commit.message
    },
    commitDate(): State['commit']['date'] {
      return this.commit.date
    },
    commitUrl(): State['commit']['url'] {
      return this.commit.url
    },
  },
  created() {
    this.fetchGitLastCommit()
  },
  methods: {
    // コミットを表示するか
    isDisplayCommit(): boolean {
      // コミットメッセージが取得できていなければ非表示
      return this.commitMessage !== ''
    },
    // 表示するコミット日時
    displayCommitDate(): string {
      const year = this.commitDate.getFullYear()
      const month = `0${this.commitDate.getMonth() + 1}`.slice(-2)
      const day = `0${this.commitDate.getDate()}`.slice(-2)
      return `${year}-${month}-${day}`
    },
    // Newラベルを表示するか
    isDisplayNewLabel(): boolean {
      const baseDate = new Date()
      // 基準日を1週間前に設定
      baseDate.setDate(baseDate.getDate() - 7)
      return this.commitDate > baseDate
    },
    // 最新のコミットを取得
    async fetchGitLastCommit(): Promise<void> {
      await this.$store.dispatch('git/getCommit')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variable.scss';

@keyframes typing {
  from {
    width: 0;
  }
}

.commit {
  width: 500px;
  &__header {
    padding: 5px;
    display: flex;
    align-items: center;
  }
  &__date {
    margin-right: 1rem;
    color: $base-color;
  }
  &__comment {
    padding: 5px;
    font-family: monospace;
    width: 100%;
    overflow: hidden;
    font-size: 1.5rem;
    white-space: nowrap;
    animation: typing 4s steps(44, end);
  }
  &__link {
    color: $text-color;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
