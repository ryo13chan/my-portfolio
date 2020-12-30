<template>
  <div v-if="isDisplayCommit()" class="commit">
    <div class="commit__header">
      <span class="commit__date">
        {{ displayCommitDate() }}
      </span>
      <span v-if="isDisplayNewLabel()" class="commit__label--new">new</span>
    </div>
    <div class="commit__comment">
      {{ commitMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

interface Data {
  commitDate: Date
  commitMessage: string
}

export default Vue.extend({
  data(): Data {
    return {
      commitDate: new Date(),
      commitMessage: '',
    }
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
      // Github APIから最新のコミットを取得
      await axios
        .get(
          'https://api.github.com/repos/ryo13chan/my-portfolio/commits/master'
        )
        .then((responce) => {
          if (responce.status !== 200) {
            return
          }
          // コミットメッセージ
          this.commitMessage = responce.data.commit.message
          // コミット日時
          this.commitDate = new Date(responce.data.commit.committer.date)
        })
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
  &__label--new {
    background-color: $label-new-background-color;
    color: #fff;
    padding: 3px 5px;
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
}
</style>
