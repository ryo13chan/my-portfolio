export type State = {
  commit: {
    message: string
    date: Date
    url: string
  }
}

export type Getters = {
  commit: State['commit']
}

export type Mutations = {
  SET_COMMIT: State['commit']
}

export type Actions = {}
