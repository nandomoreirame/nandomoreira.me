export const setPosts = ({ commit, state }) => {
  commit('SET_POSTS', state)
}

export const setRepos = ({ commit, state }) => {
  const githubRepos = require('github-repositories')
  githubRepos('nandomoreirame').then(data => {
    commit('SET_REPOS', data)
  })
}