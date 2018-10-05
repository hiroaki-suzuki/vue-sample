import Root from '@/domain/Root'
import Vue from 'vue'
import Vuex from 'vuex'
import { MyPlugin } from './myPlugin'

Vue.use(Vuex)
Vue.use(MyPlugin)

export default new Vuex.Store({
  strict: true,
  state: {
    root: new Root()
  },
  mutations: {
    updateRoot(state, root) {
      state.root = root
    }
  }
  // modules: {
  //   analogData: analogModule,
  //   contactData: contactModule
  // }
})
