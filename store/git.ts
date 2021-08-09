/* eslint-disable camelcase */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { State, Mutations, Getters } from '~/assets/@types/store/git'

export const state = (): State => ({
  commit: {
    message: '',
    date: new Date(),
    url: '',
  },
})

export type LocalState = ReturnType<typeof state>

export const getters: GetterTree<LocalState, {}> = {
  commit: (state): Getters['commit'] => state.commit,
}

export const mutations: MutationTree<LocalState> = {
  SET_COMMIT(state, p: Mutations['SET_COMMIT']) {
    state.commit = p
  },
}

export const actions: ActionTree<LocalState, {}> = {
  // Github APIから最新のコミットを取得
  getCommit({ commit }) {
    const url =
      'https://api.github.com/repos/ryo13chan/my-portfolio/commits/master'
    return this.$axios.$get(url).then((response: any) => {
      commit('SET_COMMIT', {
        message: response.commit.message,
        date: new Date(response.commit.committer.date),
        url: response.html_url,
      })
      return response
    })
  },
}
