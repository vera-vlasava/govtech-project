
import Vue from 'vue'

export const state = () => ({
  menu: false,
  headerBlend: false
})


export const actions = {

}


export const mutations = {
  toggleMenu (state, data) {
      state.menu = data
  },
  toggleBlending (state, data) {
      state.headerBlend = data
  }
}