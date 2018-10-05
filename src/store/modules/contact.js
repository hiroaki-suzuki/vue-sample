const contactModule = {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    push (state, item) {
      state.items.push(item)
    },
    set (state, items) {
      state.items = items
    }
  }
}
export default contactModule
